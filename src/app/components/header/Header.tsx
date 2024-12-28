
'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../../../../public/images/Icons/Kanya.png";
import playstore from '../../../../public/images/Icons/playstore.png';
import applestore from '../../../../public/images/Icons/app-store.png';
import Image from 'next/image';
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FcAbout } from 'react-icons/fc';
import { HiIdentification } from 'react-icons/hi';
import { GiWisdom } from 'react-icons/gi';
import { MdOutlineEvent, MdSocialDistance } from 'react-icons/md';
import { LiaPlaceOfWorshipSolid } from 'react-icons/lia';
import { GrYoga } from 'react-icons/gr';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegListAlt } from 'react-icons/fa';


// About Wisdom Events Social Initiatives Yugrishi Pooja Center Yoga And Meditation News Centers
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [click, setClick] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  // State for the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State for the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  // Ref for the language button to position dropdown correctly
  const dropdownButtonRef = useRef<HTMLAnchorElement | null>(null);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  // const router = useRouter();

  const handleNavigation = (path: any) => {
    // router.push(path); // Navigate to the specified path
    setIsDonationOpen(false); // Close the dropdown
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle side Menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  // Handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);  // Close dropdown after selecting
  };

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 m-0 w-full bg-gradient-to-r from-red-900 to-orange-500 z-50">
      <div className="my-auto container mx-auto px-2">
        <div className="relative  flex h-24 items-center">
          <div className="  flex flex-1 items-center justify-around lg:justify-between md:justify-center md:gap-14 md:items-center sm:justify-start">
            <div className="flex shrink-0 items-center ps-3 md:ps-5">
              <Link href={'/'}>
                <Image
                  alt="VJM"
                  src={logo}
                  className="w-12"
                />
              </Link>

            </div>
            <div className="mx-auto lg:mx-0 xl:mx-0 pe-5">
              <div className=''>
                <div className="hidden lg:flex space-x-1 justify-center lg:justify-end">
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-1'>
                      <FaUserGroup /> <div className='hidden lg:block'>Volunteer</div>
                    </div>
                  </a>
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-1'>
                      <BiSolidDonateHeart /> <div className='hidden lg:block'>Donation</div>
                    </div>
                  </a>
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-1'>
                      <FaCartShopping /> <div className='hidden lg:block'>Cart</div>
                    </div>
                  </a>
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-2'>
                      <div className='hidden lg:block'><Image src={playstore} className='w-6 hidden lg:block' alt='VJM' /></div>
                    </div>
                  </a>
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-2'>
                      <div className='hidden lg:block'><Image src={applestore} className='w-6 hidden lg:block' alt='VJM' /></div>
                    </div>
                  </a>
                  {/* <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >
                    <div className='flex justify-center items-center gap-2'>
                      <div className='hidden lg:block'>
                        Eng
                      </div>
                      <div className='hidden lg:block'>
                        <FaAngleDown />
                      </div>
                    </div>
                  </a> */}
                  <a
                    href="#"
                    aria-current="page"
                    className="text-white hover:text-orange-200 rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif"
                    onClick={toggleDropdown}
                    ref={dropdownButtonRef}  // Set reference to this element
                  >
                    <div className="flex justify-center items-center gap-2">
                      <div className="hidden lg:block">{selectedLanguage}</div>
                      <div className="hidden lg:block">
                        <FaAngleDown />
                      </div>
                    </div>
                  </a>

                  {/* Language Dropdown */}
                  {isDropdownOpen && (
                    <div
                      className="absolute mt-2 bg-white text-black rounded-md shadow-md z-10"
                      style={{
                        left: dropdownButtonRef.current?.getBoundingClientRect().left + 'px', // Align dropdown to left of button
                        top: dropdownButtonRef.current?.getBoundingClientRect().bottom + 'px', // Position it just below the button
                      }}
                    >
                      <ul>
                        <li
                          className="px-4 py-2 hover:bg-orange-100 hover:rounded-md cursor-pointer"
                          onClick={() => handleLanguageChange("Eng")}
                        >
                          English
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-orange-100 cursor-pointer hover:rounded-md"
                          onClick={() => handleLanguageChange("Hindi")}
                        >
                          Hindi
                        </li>
                      </ul>
                    </div>
                  )}
                  <a
                    href='#'
                    aria-current='page'
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center gap-2'>
                      <RiLoginBoxFill /> <div className='hidden lg:block'>Login/Sign Up</div>
                    </div>
                  </a>
                </div>
                <div className=" hidden lg:flex space-x-1">
                  <a
                    href={'/aboutus'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >About
                  </a>
                  <a

                    href={'/'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Wisdom
                  </a><a

                    href={'/'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Events
                  </a>
                  <a
                    href={'/'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Social Initiatives
                  </a>
                  {/* For Testing DropDown */}
                  {/* Dropdown Trigger */}
                  {/* <div className="relative group px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif text-white-300 hover:text-orange-200 rounded-md cursor-pointer">
                    <p className="flex items-center text-white gap-2">
                      <span>Dropdown Testing</span>
                      <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                    </p>

                    <div className="absolute right-0 top-10 hidden transition-all flex-col gap-1 rounded-lg bg-white w-auto shadow-md group-hover:flex">
                      <Link
                        href={'#'}
                        className="flex items-center cursor-pointer py-2 px-4 text-neutral-400 hover:text-black hover:bg-gray-100 rounded-md"
                      >
                        <FaRegListAlt />
                        <span className="whitespace-nowrap pl-3">Sub Menu 1</span>
                      </Link>
                      <Link
                        href={'#'}
                        className="flex items-center cursor-pointer py-1 px-4 text-neutral-400 hover:text-black hover:bg-gray-100 rounded-md"
                      >
                        <FaRegListAlt />
                        <span className="whitespace-nowrap pl-3">Sub Menu 2</span>
                      </Link>
                      <Link
                        href={'#'}
                        className="flex items-center cursor-pointer py-1 px-4 text-neutral-400 hover:text-black hover:bg-gray-100 rounded-md"
                      >
                        <FaRegListAlt />
                        <span className="whitespace-nowrap pl-3">Sub Menu 3</span>
                      </Link>
                      <Link
                        href={'#'}
                        className="flex items-center cursor-pointer py-2 px-4 text-neutral-400 hover:text-black hover:bg-gray-100 rounded-md"
                      >
                        <FaRegListAlt />
                        <span className="whitespace-nowrap pl-3">Sub Menu 4</span>
                      </Link>
                    </div>
                  </div> */}
                  <a

                    href={'/'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Yugrishi Pooja Center
                  </a><a

                    href={'/'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Yoga and Meditation
                  </a><a

                    href={'/aboutus'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >News
                  </a><a

                    href={'/aboutus'}
                    aria-current={'page'}
                    className={classNames('text-white-300  hover:text-orange-200',
                      ' text-white rounded-md px-3 py-2 md:px-1 sm:px-1 text-lg font-medium font-serif',
                    )}
                  >Center
                  </a>
                </div>
              </div>

            </div>
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <div className='flex pe-2 md:pe-5'
                onClick={() => {
                  setClick(!click);
                  if (click) {
                    document.body.classList.add("no-scroll");
                  } else {
                    document.body.classList.remove("no-scroll");
                  }
                }}
              >
                {!isSideMenuOpen && <div className="lg:hidden flex flex-row space-x-1 drop-shadow-2xl">

                  <a
                    href='#'
                    aria-current={'page'}
                    className={classNames('text-white hover:text-orange-200 drop-shadow-lg',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center'>
                      <BiSolidDonateHeart className='size-7' />
                    </div>
                  </a>


                </div>}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleSideMenu}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-8 group-data-[open]:hidden text-white"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* <a
                    href='#'
                    aria-current={'page'}
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center'>
                      <FaUserGroup />
                    </div>
                  </a>

                  <a
                    href='#'
                    aria-current={'page'}
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center'>
                      <FaCartShopping className='text-xl' />
                    </div>
                  </a>
                  <a
                    href='#'
                    aria-current={'page'}
                    className={classNames('text-white hover:text-orange-200',
                      'text-white rounded-md px-3 py-2 md:px-2 sm:px-1 text-lg font-medium font-serif',
                    )}
                  > <div className='flex justify-center items-center'>
                      <RiLoginBoxFill className='text-xl' />
                    </div>
                  </a> */}

      <DisclosurePanel className="lg:hidden bg-gradient-to-r from-red-900 to-orange-500  relative z-50 h-[100vh] pb-32 overflow-y-scroll">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href={'/aboutus'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex gap-2 items-center'> <RiLoginBoxFill className='text-lg' />Sign In/Sign Out</span>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'/aboutus'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex gap-2 items-center'>  <BiSolidDonateHeart className='text-lg' />Donation</span>
          </DisclosureButton>
          {/* Using the State */}
          {/* <div>
            <button
              onClick={() => setIsDonationOpen(!isDonationOpen)}
              className={classNames(
                'text-gray-300 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium w-full text-left',
              )}
            >
              <span className="flex gap-2 items-center">
                <BiSolidDonateHeart className="text-lg" />
                Testing Dropdown
              </span>
            </button>
            {isDonationOpen && (
              <div className="pl-6 space-y-1">
                <DisclosureButton
                  as="a"
                  href={'/aboutus'}
                  aria-current={'page'}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  <span className='flex gap-2 items-center'><FaCartShopping className='text-lg' /> Sub Menu 1</span>
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href={'/aboutus'}
                  aria-current={'page'}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  <span className='flex gap-2 items-center'><FaCartShopping className='text-lg' /> Sub Menu 2</span>
                </DisclosureButton>

              </div>
            )}
          </div> */}

          {/* Donation Menu with Tailwind Group */}
          {/* <div className="group relative">
            <a
              href="#"
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-base font-medium flex gap-2 items-center',
              )}
            >
              <BiSolidDonateHeart className="text-lg" />
              Donation
            </a>
            <div
              className="absolute left-0 mt-1 hidden w-full bg-gradient-to-r from-red-900 to-orange-500 rounded-md shadow-lg group-hover:block"
            >
              <a
                href="/online-donation"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Online Donation
              </a>
              <a
                href="/offline-donation"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Offline Donation
              </a>
            </div>
          </div> */}

          <DisclosureButton
            as="a"
            href={'/aboutus'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex gap-2 items-center'><FaCartShopping className='text-lg' /> Cart</span>
          </DisclosureButton>

          <DisclosureButton
            as="a"
            href={'/aboutus'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex gap-2 items-center'><FaUserGroup className='text-lg' />Volunteer</span>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'/aboutus'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2 '><HiIdentification className='text-lg' />About</span>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><GiWisdom className='text-lg' />Wisdom</span>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><MdOutlineEvent className="text-lg" />Events</span>
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><MdSocialDistance className="text-lg" />Social Initiatives</span>

          </DisclosureButton>

          {/* Dropdown Trigger */}
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><LiaPlaceOfWorshipSolid className="text-lg" />Yugrishi Pooja Center</span>

          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><GrYoga className="text-lg" />Yoga and Meditation</span>

          </DisclosureButton>
          <DisclosureButton
            as="a"
            href={'#'}
            aria-current={'page'}
            className={classNames(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            <span className='flex items-center gap-2'><IoNewspaperOutline className="text-lg" />                       News
            </span>
          </DisclosureButton>
          <div className='flex'>
            <DisclosureButton
              as="a"
              href={'#'}
              aria-current={'page'}
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              <Image src={playstore} className=' w-6 lg:hidden' alt='VJM Logo' />
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href={'#'}
              aria-current={'page'}
              className={classNames(
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              <Image src={applestore} className=' w-6 lg:hidden' alt="VJM Logo" />
            </DisclosureButton>
          </div>

        </div>
      </DisclosurePanel>

    </Disclosure >
  )
}
