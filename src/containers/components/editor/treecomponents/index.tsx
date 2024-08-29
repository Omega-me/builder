'use client';

const TreeComponents = () => (
  <>
    {/* Tree Root */}
    <div className="as-accordion-treeview-root">
      {/* 1st Level Accordion Group */}
      <div className="as-accordion-group" data-as-accordion-always-open="">
        {/* 1st Level Accordion */}
        <div className="as-accordion active" id="as-basic-tree-heading-one">
          {/* 1st Level Accordion Heading */}
          <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
            <button
              className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-controls="as-basic-tree-collapse-one">
              <svg
                className="size-4 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path className="as-accordion-active:hidden block" d="M12 5v14" />
              </svg>
            </button>
            <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
              <div className="flex items-center gap-x-3">
                <svg
                  className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">assets</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}
          {/* 1st Level Collapse */}
          <div
            id="as-basic-tree-collapse-one"
            className="as-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="as-basic-tree-heading-one">
            {/* 2nd Level Accordion Group */}
            <div
              className="as-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
              data-as-accordion-always-open="">
              {/* 2nd Level Nested Accordion */}
              <div className="as-accordion active" id="as-basic-tree-sub-heading-one">
                {/* 2nd Level Accordion Heading */}
                <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                  <button
                    className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    aria-controls="as-basic-tree-sub-collapse-one">
                    <svg
                      className="size-4 text-gray-800 dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path className="as-accordion-active:hidden block" d="M12 5v14" />
                    </svg>
                  </button>
                  <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">css</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}
                {/* 2nd Level Collapse */}
                <div
                  id="as-basic-tree-sub-collapse-one"
                  className="as-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="as-basic-tree-sub-heading-one">
                  {/* 3rd Level Accordion Group */}
                  <div
                    className="as-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                    data-as-accordion-always-open="">
                    {/* 3rd Level Accordion */}
                    <div className="as-accordion active" id="as-basic-tree-sub-level-two-heading-one">
                      {/* 3rd Level Accordion Heading */}
                      <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                          className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          aria-controls="as-basic-tree-sub-level-two-collapse-one">
                          <svg
                            className="size-4 text-gray-800 dark:text-neutral-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path className="as-accordion-active:hidden block" d="M12 5v14" />
                          </svg>
                        </button>
                        <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                          <div className="flex items-center gap-x-3">
                            <svg
                              className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                            </svg>
                            <div className="grow">
                              <span className="text-sm text-gray-800 dark:text-neutral-200">main</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End 3rd Level Accordion Heading */}
                      {/* 3rd Level Collapse */}
                      <div
                        id="as-basic-tree-sub-level-two-collapse-one"
                        className="as-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="as-basic-tree-sub-level-two-heading-one">
                        <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                          {/* 3rd Level Item */}
                          <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">main.css</span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}
                          {/* 3rd Level Item */}
                          <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">docs.css</span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}
                          {/* 3rd Level Item */}
                          <div className="px-2">
                            <span className="text-sm text-gray-800 dark:text-neutral-200">README.txt</span>
                          </div>
                          {/* End 3rd Level Item */}
                        </div>
                      </div>
                      {/* End 3rd Level Collapse */}
                    </div>
                    {/* End 3rd Level Accordion */}
                    {/* 3rd Level Accordion */}
                    <div className="as-accordion" id="as-basic-tree-sub-level-two-heading-two">
                      {/* 3rd Level Accordion Heading */}
                      <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                          className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          aria-controls="as-basic-tree-sub-level-two-collapse-two">
                          <svg
                            className="size-4 text-gray-800 dark:text-neutral-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path className="as-accordion-active:hidden block" d="M12 5v14" />
                          </svg>
                        </button>
                        <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                          <div className="flex items-center gap-x-3">
                            <svg
                              className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                            </svg>
                            <div className="grow">
                              <span className="text-sm text-gray-800 dark:text-neutral-200">tailwind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End 3rd Level Accordion Heading */}
                      {/* 3rd Level Collapse */}
                      <div
                        id="as-basic-tree-sub-level-two-collapse-two"
                        className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="as-basic-tree-sub-level-two-heading-two">
                        <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                          {/* 3rd Level Item */}
                          <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">input.css</span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}
                        </div>
                      </div>
                      {/* End 3rd Level Collapse */}
                    </div>
                    {/* End 3rd Level Accordion */}
                    {/* 3rd Level Accordion */}
                    <div className="as-accordion" id="as-basic-tree-sub-level-two-heading-three">
                      {/* 3rd Level Heading */}
                      <div className="py-0.5 px-1.5">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">.gitignore</span>
                      </div>
                      {/* End 3rd Level Heading */}
                      {/* 3rd Level Collapse */}
                      <div
                        id="as-basic-tree-sub-level-two-collapse-three"
                        className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="as-basic-tree-sub-level-two-heading-three">
                        <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                          {/* 3rd Level Item */}
                          <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">algolia.css</span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}
                        </div>
                      </div>
                      {/* End 3rd Level Collapse */}
                    </div>
                    {/* End 3rd Level Accordion */}
                  </div>
                  {/* End 3rd Level Accordion Group */}
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* Ed 2nd Level Nested Accordion */}
              {/* 2nd Level Nested Accordion */}
              <div className="as-accordion" id="as-basic-tree-sub-heading-two">
                {/* 2nd Level Accordion Heading */}
                <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                  <button
                    className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    aria-controls="as-basic-tree-sub-collapse-two">
                    <svg
                      className="size-4 text-gray-800 dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path className="as-accordion-active:hidden block" d="M12 5v14" />
                    </svg>
                  </button>
                  <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">img</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}
                {/* 2nd Level Collapse */}
                <div
                  id="as-basic-tree-sub-collapse-two"
                  className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="as-basic-tree-sub-heading-two">
                  <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                    {/* 2nd Level Item */}
                    <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <circle cx={10} cy={12} r={2} />
                          <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800 dark:text-neutral-200">hero.jpg</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                    {/* 2nd Level Item */}
                    <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <circle cx={10} cy={12} r={2} />
                          <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800 dark:text-neutral-200">tailwind.png</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                    {/* 2nd Level Item */}
                    <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <circle cx={10} cy={12} r={2} />
                          <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800 dark:text-neutral-200">untitled.png</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                  </div>
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* End 2nd Level Nested Accordion */}
              {/* 2nd Level Nested Accordion */}
              <div className="as-accordion" id="as-basic-tree-sub-heading-three">
                {/* 2nd Level Accordion Heading */}
                <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                  <button
                    className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    aria-controls="as-basic-tree-sub-collapse-three">
                    <svg
                      className="size-4 text-gray-800 dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path className="as-accordion-active:hidden block" d="M12 5v14" />
                    </svg>
                  </button>
                  <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">js</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}
                {/* 2nd Level Collapse */}
                <div
                  id="as-basic-tree-sub-collapse-three"
                  className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="as-basic-tree-sub-heading-three">
                  <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                    {/* 2nd Level Item */}
                    <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                          <circle cx={10} cy={12} r={2} />
                          <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800 dark:text-neutral-200">preline.jpg</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                  </div>
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* End 2nd Level Nested Accordion */}
            </div>
            {/* 2nd Level Accordion Group */}
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}
        {/* 1st Level Accordion */}
        <div className="as-accordion" id="as-basic-tree-heading-two">
          {/* 1st Level Accordion Heading */}
          <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
            <button
              className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-controls="as-basic-tree-collapse-two">
              <svg
                className="size-4 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path className="as-accordion-active:hidden block" d="M12 5v14" />
              </svg>
            </button>
            <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
              <div className="flex items-center gap-x-3">
                <svg
                  className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">scripts</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}
          {/* 1st Level Collapse */}
          <div
            id="as-basic-tree-collapse-two"
            className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="as-basic-tree-heading-two">
            <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
              {/* 1st Level Item */}
              <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">preline.js</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
              {/* 1st Level Item */}
              <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">tailwind.js</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
              {/* 1st Level Item */}
              <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">www.js</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
            </div>
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}
        {/* 1st Level Accordion */}
        <div className="as-accordion" id="as-basic-tree-heading-three">
          {/* 1st Level Accordion Heading */}
          <div className="as-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
            <button
              className="as-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-controls="as-basic-tree-collapse-three">
              <svg
                className="size-4 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path className="as-accordion-active:hidden block" d="M12 5v14" />
              </svg>
            </button>
            <div className="grow as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
              <div className="flex items-center gap-x-3">
                <svg
                  className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">templates</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}
          {/* 1st Level Collapse */}
          <div
            id="as-basic-tree-collapse-three"
            className="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="as-basic-tree-heading-three">
            <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
              {/* 1st Level Item */}
              <div className="as-accordion-selectable as-accordion-selected:bg-gray-100 dark:as-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">index.html</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
            </div>
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}
      </div>
      {/* End 1st Level Accordion Group */}
    </div>
    {/* End Tree Root */}
  </>
);

export default TreeComponents;
