import { useState } from 'react';
import NotesModal from './NotesModal';

const Notes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="mx-12">
            <div className="flex flex-row justify-between items-center py-8">
                <h1 className="font-extrabold text-xl">All Notes (3)</h1>
                <button onClick={openModal} className="bg-[#3198F5] hover:bg-blue-700 text-white font-bold text-sm py-4 px-8 rounded-full">
                    Create New Notes
                </button>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-medium text-left rtl:text-right text-gray-500">
                    <thead className="text-[#9193A5] bg-white">
                        <tr>
                            <th scope="col" className="py-3">
                            </th>
                            <th scope="col" className="pr-64 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lesson
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[#414158]">
                        <tr className="odd:bg-[#D3E9FD] odd:dark:bg-gray-900 even:bg-white even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                        </tr>
                        <tr className="odd:bg-[#D3E9FD] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="py-4 pr-8">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <NotesModal isOpen={isModalOpen} onClose={closeModal} />

        </div>
    );
};

export default Notes;
