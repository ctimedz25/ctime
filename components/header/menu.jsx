'use client'

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"
import Link from "next/link"

const SideMenuItems = {
    Home: "/",
    CTIME: "/cart",
    Services: "/services",
    Formations: "/blog",
    Actualites :"/Actualites",
   
}

const SubMenuItems = {
    Labo1: "/services/labo1",
    Labo2: "/services/labo2",
}

export default function SideMenu() {
    const toggleState = useToggleState()

    return (
        <div className="h-full">
          <div className="flex items-center h-full">
            <Popover className="h-full flex">
              {({ open, close }) => (
                <>
                  <div className="relative flex h-full">
                    <Popover.Button
                      data-testid="nav-menu-button"
                      className="font-bold relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-gray-500 hover:scale-90"
                    >
                      Menu
                    </Popover.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100 backdrop-blur-2xl"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 backdrop-blur-2xl"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="rounded flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/4 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-white m-2 backdrop-blur-2xl">
                      <div
                        data-testid="nav-menu-popup"
                        className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-lg justify-between p-6"
                      >
                        <div className="flex justify-end" id="xmark">
                          <button data-testid="close-menu-button" onClick={close}>
                            <XMark />
                          </button>
                        </div>
                        <ul className="flex flex-col gap-6 items-start justify-start">
                          {Object.entries(SideMenuItems).map(([name, href]) => {
                            return (
                              <li key={name}>
                                <Link
                                  href={href}
                                  className="text-3xl leading-10 hover:text-gray-300"
                                  onClick={close}
                                  data-testid={`${name.toLowerCase()}-link`}
                                >
                                  {name}
                                </Link>
                                {name === "Services" && (
                                  <ul className="ml-4 mt-2">
                                    {Object.entries(SubMenuItems).map(([subName, subHref]) => (
                                      <li key={subName}>
                                        <Link
                                          href={subHref}
                                          className="text-xl leading-8 hover:text-gray-300"
                                          onClick={close}
                                          data-testid={`${subName.toLowerCase()}-link`}
                                        >
                                          {subName}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                        <div className="flex flex-col gap-y-6">
                          <Text className="flex justify-between txt-compact-small">
                            © {new Date().getFullYear()} Ctime. All rights reserved.
                          </Text>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
    )
}
