<!--
MIT License
Copyright (c) 2026 aneko
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->
<template>
  <content>
    <div class="title">
      <svg t="1705257422086" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1891">
        <path d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z" p-id="1892"></path>
      </svg>
      site
    </div>
    <div class="projectList">
      <a
        v-for="project in siteProjects"
        :key="project.name"
        class="projectItem a"
        target="_blank"
        :href="project.url"
        @mousedown="handlePress"
        @mouseup="handleRelease"
        @mouseleave="handleRelease"
        @touchstart="handlePress"
        @touchend="handleRelease"
        @touchcancel="handleRelease"
      >
        <div class="projectItemLeft">
          <h1>{{ project.name }}</h1>
        </div>
        <div class="projectItemRight">
          <img :src="project.img" alt="" loading="lazy" decoding="async" />
        </div>
      </a>
    </div>

    <div class="title">
      <svg t="1705257823317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7833">
        <path d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z" p-id="7834"></path>
      </svg>
      skills
    </div>
    <div class="skill">
      <img id="skillPc" src="/static/svg/skillPc.svg" alt="" loading="lazy" decoding="async" />
      <img id="skillWap" src="/static/svg/skillWap.svg" alt="" loading="lazy" decoding="async" />
    </div>
  </content>
</template>

<script setup>
const siteProjects = [
  { name: '博客', url: 'https://blog.atbspb.online', img: '/static/svg/blog.svg' },
  { name: '云盘', url: 'https://disk.atbspb.online', img: '/static/svg/disk.svg' },
  { name: '探针', url: 'https://tz.atbspb.online', img: '/static/svg/probe.svg' },
  { name: '相册', url: 'https://photo.atbspb.online', img: '/static/svg/album.svg' },
]

function handlePress(e) {
  e.currentTarget.classList.add('pressed')
}

function handleRelease(e) {
  e.currentTarget.classList.remove('pressed')
}
</script>