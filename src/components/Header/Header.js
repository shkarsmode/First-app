import React from 'react';
import h from './Header.module.css';

const Header = props => {
  return <div className={h.wrap}>
    <div className={h.inner}>
      <a><svg width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.375C0 7.599 0 4.21 2.105 2.105 4.21 0 7.6 0 14.375 0h1.25c6.776 0 10.165 0 12.27 2.105C30 4.21 30 7.6 30 14.375v1.25c0 6.776 0 10.165-2.105 12.27C25.79 30 22.4 30 15.625 30h-1.25c-6.776 0-10.165 0-12.27-2.105C0 25.79 0 22.4 0 15.625v-1.25z" fill="#2787F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.125 9.375H5.938c-.625 0-.75.294-.75.619 0 .579.741 3.453 3.453 7.253 1.807 2.596 4.354 4.003 6.671 4.003 1.391 0 1.563-.313 1.563-.85v-1.962c0-.625.132-.75.572-.75.325 0 .88.162 2.179 1.413 1.483 1.484 1.727 2.149 2.561 2.149h2.188c.625 0 .938-.313.757-.93-.197-.614-.905-1.506-1.845-2.563-.51-.602-1.274-1.251-1.506-1.576-.325-.417-.232-.602 0-.973 0 0 2.665-3.754 2.943-5.029.14-.463 0-.804-.662-.804h-2.187c-.556 0-.813.294-.952.619 0 0-1.112 2.711-2.688 4.472-.51.51-.742.673-1.02.673-.139 0-.34-.163-.34-.626v-4.334c0-.556-.161-.804-.625-.804h-3.438c-.347 0-.556.258-.556.503 0 .527.788.649.869 2.132v3.221c0 .707-.127.835-.406.835-.741 0-2.545-2.724-3.615-5.84-.21-.606-.42-.851-.979-.851z" fill="#fff"></path></svg></a>
      <div className={h.right}>
        <span className={`${h.name} ${h.surname}`}>Daniil</span>
        <img src='https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1' />
        <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z" fill-rule="evenodd"></path></svg>
      </div>
    </div>
  </div>

}

export default Header;