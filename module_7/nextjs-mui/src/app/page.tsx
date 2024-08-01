import BasicGrid from "@/components/BasicGrid";
import CustomCard from "@/components/CustomCard";
import MUIForm from "@/components/MUIForm";
import { Paper } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <BasicGrid />
      <Paper sx={{ padding: 2 }}>
        <MUIForm />
      </Paper>
    </main>
  );
}
