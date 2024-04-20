'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
    let [dataTabs] = useState({
        'Mô tả': [
            {
                id: 1,
                description: 'Mô tả chi tiết sản phẩm',
            }
        ],
        'Khuyến mãi': [
            {
                id: 1,
                description: 'Các chương trình khuyến mãi (Optional)',
            }
        ],
        'Dinh dưỡng': [
            {
                id: 1,
                description: 'Chế độ dinh dưỡng, tùy loại sản phẩm (Optional)',
            }
        ],
        'Other': [
            {
                id: 1,
                description: 'Nội dung khác',
            }
        ],
    })

    return (
        <div className="w-full px-2 py-10 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-500 p-1 max-w-md">
                    {Object.keys(dataTabs).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2 w-full ">
                    {Object.values(dataTabs).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-gray-200',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.description}
                                        </h3>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
