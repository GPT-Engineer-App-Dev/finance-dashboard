import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "lucide-react";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-2xl font-bold mb-4">Financial Dashboard</h1>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="w-full h-40" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full h-40" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart className="w-full h-40" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="income">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Income Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="w-full h-40" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="expenses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full h-40" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Index;