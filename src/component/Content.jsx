import React from 'react'
import wave from '../img/Emoji.png'
import oukmnut from '../img/oukmnut.jpg'
// import Date from './Date'

function Content() {
  return (
    <div>
      {/* <Date /> */}
      <div className='content'>
      <main>
        <div>
          <h1>សួរស្ដី <img src={wave} alt="wave" width={100} /></h1>
          <h1>ខ្ញុំបាទឈ្មោះ អ៊ុក មនុត្ត</h1>
          <h1>Front-end developer</h1>
          <p>ខ្ញុំជាអ្នកអភិវឌ្ឍន៍រចនា Website ដែលមានបទពិសោធន៍ ដែលធ្វើឲ្យ គេហទំព័រ របស់លោកអ្នកមានភាពទាក់ទាញ នឹង ​Responsive នៅលើទូរសព្ទដៃ។ ខ្ញុំធ្វើការជាមួយ Figma, HTML5, CSS3, JavaScript, React, ReactNative និង Flutter ជាដើម</p>
        </div>
        <div className='buttons'>
          <a href="#"><button className="cta hire">ជួល​ខ្ញុំ</button></a>
          <a href="#"><button className="cta project">មើលគម្រោងរបស់ខ្ញុំ</button></a>
        </div>
      </main>
      <figure>
        <img src={oukmnut} alt="Ouk Mnut" className='me-img' width={350} />
        <div className='img-bg'></div>
      </figure>
    </div>
    </div>
  )
}

export default Content