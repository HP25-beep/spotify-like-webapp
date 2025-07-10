import { Song } from "@/types";

import Box from "./Box";
import Library from "./Library";
import MainWindowWrapper from "./MainWindowWrapper";

interface MainWindowProps {
  children: React.ReactNode;
  songs: Song[]
};

const MainWindow: React.FC<MainWindowProps> = ({
  children, 
  songs
}) => {

  return (
    <MainWindowWrapper>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[280px] p-2">
        <Box className="overflow-y-auto h-full">
          <Library songs={songs}/>
        </Box>  
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </MainWindowWrapper>
  );
}

export default MainWindow;