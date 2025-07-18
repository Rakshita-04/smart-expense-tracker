import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const EXPENSES_FILE = path.join(DATA_DIR, "expenses.json")

async function getExpenses() {
  try {
    const data = await fs.readFile(EXPENSES_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const category = searchParams.get("category")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const expenses = await getExpenses()
    let filteredExpenses = expenses.filter((expense: any) => expense.userId === userId)

    // Apply filters
    if (category) {
      filteredExpenses = filteredExpenses.filter((expense: any) => expense.category === category)
    }
    if (startDate) {
      filteredExpenses = filteredExpenses.filter((expense: any) => expense.date >= startDate)
    }
    if (endDate) {
      filteredExpenses = filteredExpenses.filter((expense: any) => expense.date <= endDate)
    }

    // Generate CSV
    const csvHeader = "Title,Amount,Category,Date\n"
    const csvRows = filteredExpenses
      .map((expense: any) => `"${expense.title}",${expense.amount},"${expense.category}","${expense.date}"`)
      .join("\n")

    const csvContent = csvHeader + csvRows

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=expenses.csv",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
