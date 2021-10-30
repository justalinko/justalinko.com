<template>
  <div>
    <div class="bg-gray-200">
      <div class="flex flex-row gap-auto w-10/12 p-5 m-auto bg-white">
        <img
          src="https://ui-avatars.com/api/?name=JST&background=000&color=eee&length=3&size=92"
          class="rounded rounded-full w-auto h-auto hidden md:block"
          alt="avatars justalinko"
        />
        <h1
          class="
            text-4xl
            md:text-5xl
            font-bold
            break-words
            md:tracking-widest
            m-auto
            underline
          "
        >
          JUSTALINKO
        </h1>
      </div>

      <div class="flex flex-col gap-auto w-10/12 p-5 m-auto bg-white">
        <div class="flex flex-row m-auto mb-6">
          <svg
            class="w-6 h-6 stroke-current text-red-700 cursor-pointer"
            @click="openEmail()"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            ></path>
            <path
              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            ></path>
          </svg>
          &nbsp;
          <p class="hover:text-red-500 hover:font-bold hidden sm:block">
            <a href="mailto:alinkokomansuby@gmail.com"
              >alinkokomansuby@gmail.com</a
            >
          </p>
          &nbsp;&nbsp;
          <svg
            class="w-6 h-6 text-red-700 cursor-pointer"
            @click="openBlog()"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p class="hover:text-red-500 hover:font-bold hidden sm:block">
            <a href="https://justalinko.com">justalinko.com</a>
          </p>
        </div>

        <hr class="border-2 border-black w-full" />
        <div id="menu-desktop" class="hidden md:block">
          <ul class="flex flex-row list-none gap-6 m-4 ml-10 inline-block">
            <li class="bg-black p-2 text-white hover:bg-red-700">
              <a href="#about">ABOUT</a>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700">
              <a href="#skill">SKILLS</a>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700">
              <a href="#work">WORKS</a>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700">
              <a href="#post">POSTS</a>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700">
              <a href="http://blog.justalinko.com">BLOG</a>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700 cursor-pointer">
              <NuxtLink to="/contact">CONTACT </NuxtLink>
            </li>
            <li class="bg-black p-2 text-white hover:bg-red-700 cursor-pointer">
              <NuxtLink to="/create">CREATE PROJECT </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- about -->
        <div id="about">
          <h3 class="font-bold text-2xl ml-10 mt-10 underline">About me</h3>
          <div class="m-10 text-justify">
            <img
              src="https://scontent.fsub2-1.fna.fbcdn.net/v/t1.6435-9/118452861_170472077911742_1433856696997418763_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH8hZ6mSkgwhLJnu52rNOfsOKTwbNzF9pk4pPBs3MX2mYuveyZnkH7H-D_Ce1TLAe7yt0S5N-B4VbPflBVLHbHP&_nc_ohc=O9u9okl3P8MAX_xnlO0&_nc_ht=scontent.fsub2-1.fna&oh=b75125caff787f0f176f415cebb05bfc&oe=61A216EB"
              class="rounded rounded-full w-36 h-36 float-left mr-6"
              lt="avatars justalinko"
            />
            <p class="text-lg">
              Alin Koko Mansuby is a Web Developer based on Jepara, Central Java
              , Indonesia with a passion for building digital services/stuff he
              wants. He has a knack for all things launching products, from
              planning and designing all the way to solving real-life problems
              with code He like to write code and thinking about new idea and
              create the innovation for future, Actually he is quite lazy ,so he
              often makes automation tools for him project. When not online, he
              loves to discuss about everything and watching anime, specially he
              like to discuss about business and how to work and get money.
              Currently he working
              <a
                href="https://github.com/justalinko/reikoframework"
                target="_blank"
                class="hover:text-red-700 underline italic"
                >Reiko Framework</a
              >
              and
              <a
                href="https://github.com/justalinko/autils"
                target="_blank"
                class="hover:text-red-700 underline italic"
                >Autils</a
              >
              based on him project about automation tools
            </p>
          </div>
        </div>

        <!-- Skill -->
        <div id="skill">
          <h3 class="font-bold text-2xl ml-10 m-1 underline">Skills</h3>
          <div class="mt-10 ml-10">
            <div class="grid grid-cols-1 md:grid-cols-2 md:text-2xl gap-2">
              <div class="col-start">
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">PHP Native</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">Laravel Framework</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">CodeIgniter Framework</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">Bash shell scripting</li>
              </div>
              <div class="col-end">
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">NodeJS</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">VueJS</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">Git</li>
                <li class="hover:text-red-700 cursor-pointer hover:font-bold">Linux SysAdmin</li>
              </div>
            </div>
          </div>
        </div>

        <!-- Work -->
        <div id="work">
          <h3 class="font-bold text-2xl ml-10 mt-10 m-1 underline">Works</h3>

          <div class="mt-10">
            <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full h-60"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Reiko Framework"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Reiko Framework</div>
                    <p class="text-gray-700 text-base">
                      Reiko Framework is PHP Web framework for simplicity, if
                      you need built web application and need simple framework
                      and powerfull you can use Reiko Framework.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#framework</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#phpwebdev</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#reikoframework</span
                    >
                  </div>
                </div>
              </div>
              <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full h-60"
                    src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Mountain"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      Autils - Automated Server Utilities
                    </div>
                    <p class="text-gray-700 text-base">
                      Autils is tools for automating installation package in
                      ubuntu or debian server, provide packages that support
                      development needs
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#automationtools</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#autils</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#ubuntuserver</span
                    >
                  </div>
                </div>
              </div>
              <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full h-60"
                    src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Mountain"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      Hire me for your project
                    </div>
                    <p class="text-gray-700 text-base">
                      I'm freelance web developers ready to work on your
                      project, if there is something that needs to be discussed
                      with me, please contact me at the link that has been
                      listed
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#foryourproject</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#hire</span
                    >
                    <span
                      class="
                        inline-block
                        bg-gray-200
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-gray-700
                        mr-2
                        mb-2
                      "
                      >#hiremeflish</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div id="posts">
                <h3 class="font-bold text-2xl ml-10 mt-10 m-1 underline">Posts</h3>
                <div class="mt-10 mb-20">
                    <div class="grid grid-cols-1 " v-bind="posts" v-for="post in posts" >

                        <div class=" w-full lg:max-w-full lg:flex gap-3 mt-2">
                            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l border-t border-l border-b border-gray-400 text-center overflow-hidden"
                                :style="'background-image: url(' + post.media$thumbnail.url +')'" title="Mountain">
                            </div>
                            <div
                                class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">

                                    <div class="text-gray-900 font-bold text-xl mb-2 cursor-pointer hover:text-red-700">
                                        <a :href="post.link[1].href" target="_blank"> {{ post.title.$t }} </a>
                                    </div>
                                    <p class="text-gray-700 text-base"> {{ post.summary.$t }}</p>
                                </div>
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full mr-4"
                                        :src="'https://ui-avatars.com/api/?background=random&length=2&name='+post.author[0].name.$t"
                                        alt="Avatar of Writer">
                                    <div class="text-sm">
                                        <p class="text-gray-900 leading-none"> {{ post.author[0].name.$t }}</p>
                                        <p class="text-gray-600">{{ parseDate( post.published.$t ) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

      </div>
    </div>
  </div>
</template>