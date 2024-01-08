import { Button } from '../button';
import { GameStatus } from '@/app/types';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export const GameResult = ({ gameStatus }: { gameStatus: GameStatus }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative flex w-72 max-w-lg transform flex-col items-center justify-center gap-8 overflow-hidden rounded-lg bg-current p-8 text-left shadow-xl transition-all md:p-12'>
                <div>
                  <Dialog.Title
                    as='h2'
                    className='text-4xl font-bold uppercase leading-6 text-gray-700'
                  >
                    {gameStatus}
                  </Dialog.Title>
                </div>
                <Button
                  name='Reset game'
                  className='glitter-border w-full px-16 px-5 py-2.5 text-gray-700 '
                  href='/'
                >
                  Reset game
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
