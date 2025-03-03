"use client";
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import SidebarOption from "./SideBarOption";
interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  userId: string;
  roomId: string;
}

function Sidebar() {
  const [groupData, setGroupData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });
  const { user } = useUser();
  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );
  useEffect(() => {
    if (!data) return;

    //Imagine there is a lot of data and you want to group it by role like [doc1, doc2, doc3] -> {owner: [doc1, doc3], editor: [doc2]}

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupData(grouped);
  }, [data]);
  const menuOption = (
    <>
      <NewDocumentButton />
      <div className="flex py-4 flex-col space-y-4 md:max-w-36">
        {groupData.owner.length === 0 ? (
          <h2 className="text-grey-500 font-semibold text-sm">No Tabs Found</h2>
        ) : (
          <>
            <h2 className="text-grey-500 font-semibold text-sm flex">
              My Tab's
            </h2>
            {groupData.owner.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
            ))}
            {groupData.editor.length > 0 && (
              <>
                <h2 className="text-grey-500 font-semibold text-sm">
                  Shared with me
                </h2>
                {groupData.editor.map((doc) => (
                  <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    href={`/doc/${doc.id}`}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOption}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOption}</div>
    </div>
  );
}
export default Sidebar;
