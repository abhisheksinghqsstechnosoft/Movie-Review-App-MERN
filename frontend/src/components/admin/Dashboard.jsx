import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import {FileUploader} from 'react-drag-drop-files';

import Toastify from 'toastify-js'

const Dashboard = () => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [showAddActorModal, setShowAddActorModal] = useState(false);
  const [file , setFile]= useState(null);

  const toggleCreateMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  const openAddMovieModal = () => {
    setShowAddMovieModal(true);
    setIsCreateMenuOpen(false); // Close the main menu
  };

  const openAddActorModal = () => {
    setShowAddActorModal(true);
    setIsCreateMenuOpen(false); // Close the main menu
  };

  const closeModals = () => {
    setShowAddMovieModal(false);
    setShowAddActorModal(false);
  };

  const handleAddActor = () => {
    // Logic to handle adding an actor goes here
    closeModals();
  };

  const handleAddMovie = () => {
    // Logic to handle adding a movie goes here
    closeModals();
  };
  const handleChange= (file)=>{
  setFile(file);
  console.log(file);
  }

  const handleTypeError= (error)=>{
    console.log(error);
    Toastify({
      text: error,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "center", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      // onClick: function(){} // Callback after click
    }).showToast();
  }

  return (
    <div className='w-full pt-5 bg-secondary relative'>
      <div className='flex items-center justify-between'>
        <input
          placeholder='search movies...'
          className='ml-5 border-2 p-2 text-lg border-white bg-white rounded'
          type='text'
        />
        <div className='relative'>
          <button
            className='flex mr-10 w-full items-center p-2 bg-gray-400 border-2 border-white hover:border-primary rounded text-lg'
            onClick={toggleCreateMenu}
          >
            <span>create</span>
            <FiPlus />
          </button>
          {isCreateMenuOpen && (
            <div className='absolute right-auto w-full flex flex-col bg-gray-400 border-gray-300 rounded'>
              <button
                onClick={openAddActorModal}
                className='p-2 rounded hover:bg-black hover:border-primary text-lg'
              >
                Add Actor
              </button>
              <button
                onClick={openAddMovieModal}
                className='p-2 rounded hover:bg-black hover:border-primary text-lg'
              >
                Add Movie
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for adding actors */}
      {showAddActorModal && (
        <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='bg-primary w-[58rem] h-[40rem] overflow-auto p-4 rounded'>
         
           
            <button
              onClick={handleAddActor}
              className='p-2 rounded hover:bg-black hover:border-primary text-lg'
            >
              Add Actor
            </button>
            <FileUploader name='file' handleChange={handleChange} types={['mp4','avi']} onTypeError={handleTypeError} />
            <button onClick={closeModals} className='p-2 text-lg text-white'>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modal for adding movies */}
      {showAddMovieModal && (
        <div className='fixed inset-0 flex  backdrop-blur-sm items-center justify-center z-50'>
          <div className='bg-primary p-4 w-[58rem] h-[40rem] overflow-auto rounded'>
          
            <button
              onClick={handleAddMovie}
              className='p-2 rounded hover:bg-black hover:border-primary text-lg'
            >
              Add Movie
            </button>
            <FileUploader name='file' handleChange={handleChange} types={['mp4','avi']}  onTypeError={handleTypeError}/>

         
            <button onClick={closeModals} className='p-2 text-lg'>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
