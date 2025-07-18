import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

const DATA_DIR = path.join(process.cwd(), "data")
const EXPENSES_FILE = path.join(DATA_DIR, "expenses.json")

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

async function getExpenses() {
  try {
    await ensureDataDir()
    const data = await fs.readFile(EXPENSES_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveExpenses(expenses: any[]) {
  await ensureDataDir()
  await fs.writeFile(EXPENSES_FILE, JSON.stringify(expenses, null, 2))
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const expenses = await getExpenses()
    const userExpenses = expenses.filter((expense: any) => expense.userId === userId)

    return NextResponse.json({ expenses: userExpenses })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, amount, category, date, userId } = await request.json()

    if (!title || !amount || !category || !date || !userId) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const expenses = await getExpenses()

    const newExpense = {
      id: uuidv4(),
      title,
      amount: Number.parseFloat(amount),
      category,
      date,
      userId,
      createdAt: new Date().toISOString(),
    }

    expenses.push(newExpense)
    await saveExpenses(expenses)

    return NextResponse.json({ expense: newExpense })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, title, amount, category, date, userId } = await request.json()

    if (!id || !title || !amount || !category || !date || !userId) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const expenses = await getExpenses()
    const expenseIndex = expenses.findIndex((expense: any) => expense.id === id && expense.userId === userId)

    if (expenseIndex === -1) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 })
    }

    expenses[expenseIndex] = {
      ...expenses[expenseIndex],
      title,
      amount: Number.parseFloat(amount),
      category,
      date,
      updatedAt: new Date().toISOString(),
    }

    await saveExpenses(expenses)

    return NextResponse.json({ expense: expenses[expenseIndex] })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const userId = searchParams.get("userId")

    if (!id || !userId) {
      return NextResponse.json({ error: "ID and User ID are required" }, { status: 400 })
    }

    const expenses = await getExpenses()
    const filteredExpenses = expenses.filter((expense: any) => !(expense.id === id && expense.userId === userId))

    if (filteredExpenses.length === expenses.length) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 })
    }

    await saveExpenses(filteredExpenses)

    return NextResponse.json({ message: "Expense deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
