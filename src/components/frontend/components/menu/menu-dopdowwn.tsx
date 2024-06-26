'use client'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDown, ScanFace, Users } from 'lucide-react'
import Link from 'next/link'

export default function MenuDropdown() {
    return (
        <div className="text-right z-20">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium hover:text-violet-100 text-[#071c69] hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Về Hải Sản Hoàng Gia
                        <ChevronDown
                            className="-mr-1 h-5 w-5 text-[#071c69] hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={"/page/about-us"}
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <ScanFace
                                                className="mr-2 h-5 w-5 "
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <ScanFace
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Giới thiệu
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <Users
                                                className="mr-2 h-5 w-5 "
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Users
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Tuyển dụng
                                    </button>
                                )}
                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}



