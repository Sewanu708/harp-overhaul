import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type DomainUtils = {
    sendingDomain: string;
    setSendingDomain: (domain: string) => void;
    isModalOpen: boolean,
    setIsModalOpen: () => void
};

const noopstorage = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { }
};

const useDomain = create<DomainUtils>()(
    persist(
        (set) => ({
            sendingDomain: "",
            setSendingDomain: (domain) =>
                set({
                    sendingDomain: domain,
                }),
            isModalOpen: false,
            setIsModalOpen: () => set(state => ({
                isModalOpen: !state.isModalOpen
            }))
        }),

        {
            name: "domain",
            storage: createJSONStorage(() =>
                typeof window !== "undefined" ? sessionStorage : noopstorage
            ),
        }
    )
);

export default useDomain;
