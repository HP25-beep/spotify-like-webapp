"use client";

import { BiMinus, BiPlus, BiSolidPlaylist } from "react-icons/bi";
import { useState } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import useOnPlay from "@/hooks/useOnPlay";

import { Song } from "@/types";

import FileNode from "./FileNode";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
  songs
}) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  
  const onPlay = useOnPlay(songs);
  
  const [isEditing, setIsEditing] = useState(false);
  
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div
        className="
          flex
          items-center
          justify-between
          px-5
          pt-4
        "
      >
        <div className="
            inline-flex
            items-center
            gap-x-2
          "
        >
          <BiSolidPlaylist className="text-neutral-400" size={26}/>
          <p 
            className="
              text-neutral-400
              font-medium
              text-md
            "
          >
            Your Library
          </p>
        </div>
        <div className="grid grid-cols-2 space-x-1">
        <BiMinus
          onClick={() => setIsEditing(!isEditing)}
          size={20}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
        <BiPlus 
          onClick={onClick}
          size={20}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
        </div>
      </div>
      <div className="
          flex
          flex-col
          gap-y-2
          mt-4
          px-3
      ">
        {songs.map((item) => (
          <FileNode 
            key={item.id}
            data={item}
            onEditing={isEditing}
            onOpen={onPlay}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;