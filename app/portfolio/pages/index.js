import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thapelo's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.sovtech.co.za/wp-content/uploads/sites/29/2019/07/sovtech_favicon.png" />
      </Head>
    
      {/* <header className={styles.header}>
        <div className={styles.leftnav}>
            <a href="/">T</a>
        </div>

        <div className={styles.rightnav}>
          <a href="#">Contact</a>
        </div>
      </header> */}

      <main className={styles.main}>

        <section className={styles.intro}>
            <img src="/profile-img.jpg" alt="Picture of Thapelo" className={styles.profile}/>

            <div className={styles.icontent}>
              <h1>Hi <span>Abc</span> team</h1>
              <h2>I am Thapelo.</h2>
              <p>I enjoy playing the piano, but I am still learning though, hear for yourself. </p>
              <audio src="/test-tune.wav" controls ></audio>
            </div>

        </section>

        <section className={styles.mybackground}>

            <div className={styles.section}>
              <p >I am a -year-old pioneer in software development, especially client-side development. I find that interacting with the user of the system I am designing and developing for fulfilling when I see amazement written on their face.</p>
              <img src="https://i1.wp.com/media4.giphy.com/media/26BkNyQ3ovYKrJTcQ/giphy.gif" alt=""/>
            </div>
         

            <div className={styles.section}>
              <img src="https://cdn.prod.openfit.com/uploads/2017/01/How-to-Lose-Weight-if-You-Work-the-Night-Shift.jpg" alt=""/>

              <p >The need for designing and developing accessible, beautiful, interactive, and efficient systems is what keeps me at night researching and learning better ways to lift the restriction on how users access the content and products we provide.</p>
            </div>
           
        </section>

        <section className={styles.aboutcontent}>
          <h2>I need to work @ Abc because:</h2> 
          <p>Honestly speaking, I am attracted and sold the most by Sovtech's motto of developing custom solutions. I support and believe in the idea of giving organizations of different sizes a unique identity online as it does make a difference in allowing them to better connect and communicate with their users. This is a motto I can stand behind and help fulfill it.</p>

          <p>Looking at the Sovtech clients' section there are a lot of familiar brands, most I use daily. This brings a lot of curiosity and excitement when I think about being part of a team that designs and develops systems that help these brands serve us better as consumers of content and products.</p>

          <p>With the above said, I believe being part of the Sovtech team will allow me to grow as a designer/developer, in the process changing my overall world view on designing and developing systems that serve clients and their users better.</p>

       
        </section>

    
        
      </main>

      <footer className={styles.footer}>
          <small><p>Designed by <a href="/">Thapelo</a></p></small>
      </footer>
    </div>
  )
}
