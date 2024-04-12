import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center title">Lata Mangeshkar</h1>
      <h3 className="text-center">Goddess Saraswati On Earth..</h3>
      <div className="thumbnail center-block border image">
        <img className="image-responsive highlighted-image" src="http://media2.intoday.in/indiatoday/images/stories/lata-birthday-story_647_092815125002.jpg" alt="Lata Mangeshkar" />
        <div className="caption text-center">T
        The Melody Queen: Lata Mangeshkar</div>
      </div>
      <div className="well text-justify text-center">
        <p>Lata Mangeshkar is the pride of Indian music industry. Blessed with beautiful voice, she is the most well 
          known Indian vocalist. Highly versatile, she has sung in more than 20 languages. To honor and give recognition to her works, 
          Lata Mangeshkar is also known as the Nightingale of India. Well, in this article, we will present you with the biography of Lata Mangeshkar.</p>
          {/* Quotes section */}
        {/* Quotes section */}
        <div className="quotes-section">
          <blockquote className="quote"><strong>"Music is like my breath. I don't get tired of it. Even if I sing the whole day, I don't get tired."</strong></blockquote>
          <blockquote className="quote"><strong>"I am grateful to God for giving me such a good voice, and I've tried to give my best. But my success has been because of my good fortune, not my voice."</strong></blockquote>
          <blockquote className="quote"><strong>"I feel I am blessed, and I thank God for this every day. The day I don't feel that, I will stop singing."</strong></blockquote>
          <blockquote className="quote"><strong>"You have to keep practicing to maintain a good voice. It's like any other muscle in your body. You have to exercise it."</strong></blockquote>
          <blockquote className="quote"><strong>"I've always believed that music is something sacred. It connects you to the divine."</strong></blockquote>
          <blockquote className="quote"><strong>"When I sing, I don't think about whether I'm happy or sad. I just lose myself in the music."</strong></blockquote>
        </div>

        <blockquote>Here's a <a href="https://en.wikipedia.org/wiki/Lata_Mangeshkar" target="_blank" rel="noopener noreferrer">link</a> to read more about her.</blockquote>
      </div>
    </div>
  );
}


function Biography() {
  return (
    <div>
      <div className="container biography-section" style={{ backgroundColor: 'yellow', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h1 className="text-center title">Biography</h1>
          <div className="biography-content">
            <p>
              <p className="text-3xl tracking-tight text-gray-900 sm:text-2xl">
                Lata Mangeshkar, born in Indore on September 28, 1929, rose to become Bollywood's most iconic playback singer, with a career spanning over 50 years. 
                Despite initial rejection due to her high-pitched voice, she persevered and made her mark in the industry in the late 1940s. 
                Her breakthrough came with the film Majboor in 1948, followed by a string of hits in 1949.
                Lata Mangeshkar was born in Indore on September 28, 1929, and became, quite simply, the most popular playback singer in Bollywood's history. 
                She sung for over 50 years for actresses from Nargis to Preity G Zinta, as well as recorded albums of all kinds (ghazals, pop, etc). 
                Until the 1991 edition, when her entry disappeared, the Guinness Book of World Records listed her as the most-recorded artist in the world 
                with not less than 30,000 solo, duet,and chorus-backed songs recorded in 20 Indian languages between 948 and 1987. Today that number may have reached 40,000!
              </p>
            </p>
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <img
            src="https://img.jagranjosh.com/images/2022/January/1212022/Lata-Mangeshkar-Biography.png"
            alt="5G cityscape"
            className="h-56 w-full object-contain lg:h-full lg:w-full"
            style={{ width: '80%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }}
          />
        </div>
      </div>
      <div className="container biography-section" style={{ backgroundColor: 'grey', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <div className="biography-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/LataMangeshkar14.jpg/220px-LataMangeshkar14.jpg"
            alt="5G cityscape"
            className="h-56 w-full object-contain lg:h-full lg:w-full"
            style={{ width: '80%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }}
          />
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
        <p>
              <p className="text-3xl tracking-tight text-gray-900 sm:text-2xl">
                She was born the daughter of Dinanath Mangeshkar, the owner of a theater company and a reputed classical singer in his own right. 
                He started giving Lata singing lessons from the age of five, and she also studied with renowned singers Aman Ali Khan Sahib and Amanat Khan. 
                Even at a young age she displayed a God-given musical gift and could master vocal exercises the first time.
              When Lata Mangeshkar was 13 years old, her father died due to a heart attack in 1942.
               The owner of Navyug Chitrapat movie company named Master Vinayak or Vinayak Damodar Karnataki took care of them. 
               He was a close friend of the Mangeshkar family. He helped Lata to get started in a career as a singer and actress. 
              In 1942, Lata Mangeshkar sang the song "Naachu Yaa Gade, Khelu Saari Mani Haus Bhaari". 
              It was composed by Sadashivrao Nevrekar for Vasant Joglekar's Marathi movie Kiti Hasaal. 
              The song dropped from the final cut. A small role was also provided by Vinayak in Navyug Chitrapat's Marathi movie Pahli Mangalaa-gaur, 
              she sang "Natali Chaitraachi Navalaai". It was composed by Dada Chandekar. "Mata Ek Sapoot Ki Duniya Badal De Tu" was her first song in Hindi.
              As a teenager, she struggled and support her family. She established herself as a playback singer in the Hindi film industry of the 1940s.  
              She moved to Mumbai in 1945. She started taking lessons from Ustad Aman Ali Khan of Bhindibazaar Gharana in Hindustani classical music. 
              For the movie Aap Ki Seva Mein (1946), she sang the song "Paa Lagoon Kar Jori" which was composed by Datta Davjekar. Also, in Badi Maa (1945) movie, 
              Lata and her sister Asha played minor roles. In this movie, she also sang a Bhajan "Mata Tere Charnon Mein." 
              In 1948, Vinayak died and music director Ghulam Haider mentored her as a singer. 
              He introduced Lata to producer Sashadhar Mukherjee. She recorded the hit “Uthaye ja unke sitam” in Andaz (1949), 
              and her destiny was sealed. From this point, she gave her musical voice to every major leading lady,
               representing every generation of Hindi cinema from Nargis and Waheeda Rehman to Madhuri Dixit and Preity Zinta.
                 </p>
            </p>
          
        </div>
        
      </div>
      <div className="container biography-section" style={{ backgroundColor: 'yellow', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <div className="biography-content">
            <p>
              <p className="text-3xl tracking-tight text-gray-900 sm:text-2xl">
              Her singing contributed a great deal to the commercial films like Mahal (1949), Barsaat (1949), Meena Bazaar (1950), Aadhi Raat (1950), 
               Chhoti Bhabhi (1950), Afsana (1951), Aansoo (1953), and Adl-e-Jehangir (1955).
               She also sang various Raag-based songs for Naushad in films like Deedar (1951), Baiju Bawra (1952), Amar (1954), Uran Khatola (1955), and Mother India (1957).  
               Her first song for the composer Naushad was Ae Chorre Ki Jaat Badi Bewafa, a duet with G. M. Durrani. The duo, Shankar–Jaikishan, chose Lata for Barsaat (1949), 
               Aah (1953), Shree 420 (1955), and Chori Chori (1956). Composer S.D Burman before 1957 chose Lata as the leading female singer for his musical scores in Sazaa (1951),
               House No. 44 (1955), and Devdas (1955). In 1957, a rift developed between Lata Mangeshkar and Burman and she did not sing his compositions again until 1962.
               She also recorded her first Hindi song with the composer Ilaiyaraaja, for the film Lajja. 
              Her song "Wada Na Tod" was included in the movie Eternal Sunshine of the Spotless Mind (2004). An album was released named Saadgi on 21 June 2007.
              She released the album Sarhadein: Music Beyond Boundaries on 12 April 2011. 
              It contains duet Tera Milna Bahut Acha Lage" by Mangeshkar and Mehdi Hassan. 
              She also recorded a song for composer Nadeem-Shravan "Kaise Piya Se" for Bewafaa (2005). 
              Shamir Tandon also recorded a song with her "Tere Hasne Sai Mujheko" for the movie Satrangee Parachute (2011). 
              She also recorded a song in her own studio. The song was "Jeena kya hai, jaana maine" for Dunno Y2-Life Is A Moment (2015).
              She launched her own music label 'LM Music' on 28 November 2012 with an album of bhajans. She recorded a Bengali album in 2014. 
              She released the song "Saugandh Mujhe Is Mitti Ki", composed by Mayuresh Pai in 2019. It was a tribute given to the Indian army and nation.  </p>
            </p>
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <img
            src="https://static.toiimg.com/photo/89385638.cms"
            alt="5G cityscape"
            className="h-56 w-full object-contain lg:h-full lg:w-full"
            style={{ width: '80%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }}
          />
        </div>
      </div>
      <div className="container biography-section" style={{ backgroundColor: 'grey', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <div className="biography-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fh-PRF9b26zo1NQrUh-npkBlxj2vW_fPGw&s"
            alt="5G cityscape"
            className="h-56 w-full object-contain lg:h-full lg:w-full"
            style={{ width: '80%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }}
          />
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
  
              <p className="text-3xl tracking-tight text-gray-900 sm:text-2xl">Lata Mangeshkar Death Anniversary: Today, February 6 marks the first death anniversary of legendary singer Lata Mangeshkar, 
              also known as Lata di. She passed away on February 6 last year at Mumbai's Breach Candy Hospital at 92. Born on September 28, 1929, 
              she was one of the biggest music icons in the country. Her contribution to the Indian music industry gained her titles such as the "Queen of Melody", 
              "Voice of the Millennium" and "Nightingale of India". The classically-trained star rose to fame in India's booming film industry as a "playback singer", 
              providing the singing voice to Bollywood's lip-synching movie stars over the course of a career which spanned more than half a century.
              For decades, the "nightingale of Bollywood" was the country's most in-demand singer, with every top actress wanting her to sing their songs. 
              Her records, meanwhile, sold in the tens of thousands, and she boasted a back catalogue of thousands of songs spanning numerous genres and a total of 36 languages.
              But she was also much more than her voice. Mangeshkar was a passionate cricket fan and had a love for cars and the slot machines of Vegas. 
              She also rubbed shoulders with some of Bollywood's brightest stars - and at least one Beatle. </p>
          
        </div>
        
      </div>
      <br></br>
    </div>

  );
}




function Songs() {
  // Define a function to handle listening to the song
  const listenToSong = (youtubeLink) => {
    window.open(youtubeLink, '_blank');
  };

  // Define an array of songs with their details
  const songs = [
    {
      title: "Aayega Aayega Aanewala",
      movie: "Mahal (1949)",
      image: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1440683222621/srch_saregama_INH109533360.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Lag Ja Gale",
      movie: "Woh Kaun Thi (1964)",
      image: "https://i.scdn.co/image/ab67616d0000b27309f17ebf9b73c661a0849a19",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Ajeeb Dastan Hai Yeh",
      movie: "Dil Apna Aur Preet Parai (1960)",
      image: "https://i.ytimg.com/vi/vXm1gB-IRGE/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Pyar Kiya To Darna Kya",
      movie:  "Mughal-e-Azam (1960)",
      image: "https://moviemavengaldotcom.files.wordpress.com/2016/11/pyaar-kiya-to.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Tere Bina Aag Yeh Chandni",
      movie: "Awara (1951)",
      image: "https://i.ytimg.com/vi/rDH329X1K80/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "O Sajna Barkha Bahaar Aayi",
      movie: "Dil Apna Aur Preet Parai (1960)",
      image: "https://i.ytimg.com/vi/wT5sEE2-59s/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Tere Bina Zindagi Se" ,
      movie: "Dil Apna Aur Preet Parai (1960)",
      image: "https://i.ytimg.com/vi/8-HnmVg0-O8/hqdefault.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    },
    {
      title: "Kabhi Kabhi Aditi",
      movie: "Jaane Tu... Ya Jaane Na (2008)",
      image: "https://i1.sndcdn.com/artworks-GArwu8k4nmxqcByq-kGjdLg-t500x500.jpg",
      youtubeLink: "https://youtu.be/e24S6d4e3QA?si=4-Qnp9V4V7vu3bl3"
    }
    
    // Add other songs similarly
  ].slice(0, 12); // Limit to 12 songs

  return (
    <div className="container">
      <h1 className="text-center title">Songs</h1>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song-container">
            <div className="song-details">
              <strong>{song.title}</strong> - {song.movie}
            </div>
            <div className="song-image">
              <img src={song.image} alt={song.title} onClick={() => listenToSong(song.youtubeLink)} />
            </div>
            <div className="listen-button">
              <button onClick={() => listenToSong(song.youtubeLink)}>Listen</button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}



function Awards() {
  return (
    <div className="container awards-container">
      <h1 className="text-center title" style={{ color: 'Red' }}>Awards and Recognitions</h1>
      <div className="awards-list">
        <ul className="grid-container">
          {/* List of awards */}
          <li className="grid-item">
            <strong className="award-name">Bharat Ratna</strong> 
            <br />
            <div className="award-item">
              <img src="https://i.timesnowhindi.com/Lata_Mangeshkar_Awards.jpg" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">Text description for Bharat Ratna Award...</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Best Female Playback Singer.</strong> 
            <br />
            <div className="award-item">
              <img src="https://aknandy.wordpress.com/wp-content/uploads/2017/01/404.jpg" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">1972 - Parichay</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Best Playback Singer.</strong> 
            <br />
            <div className="award-item">
              <img src="https://static.toiimg.com/thumb.cms?msid=19723214&height=600&width=600" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">1966 - Sadhi Mansa</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Padma Bhushan</strong> 
            <br />
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3f8Kfah8yZjHgA2Cxky0ce6e-lLeqdvfvFwvJNXkCA&s" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">India's Third-Highest Civilian Award</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Padma Vibhushan</strong>
            <br />
            <div className="award-item">
              <img src="https://aknandy.wordpress.com/wp-content/uploads/2017/01/403.jpg" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(1999): India's Second-Highest Civilian Award</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Dadasaheb Phalke Award </strong>
            <br />
            <div className="award-item">
              <img src="https://img.jagranjosh.com/images/2022/April/2542022/pm_modi_conferred_first_lata_deenanath_mangeshkar_award.webp" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(1989): India's Highest Award in Cinema</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Maharashtra Bhushan Award </strong>
            <br />
            <div className="award-item">
              <img src="https://fl-i.thgim.com/public/incoming/w61bss/article65725996.ece/alternates/FREE_1200/572259.II2" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(1997): Highest Civilian Award of Maharashtra State</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Bharat Ratna:</strong> India's Highest Civilian Award
            <br />
            <div className="award-item">
              <img src="https://data1.ibtimes.co.in/photo/en/full/88989/bharat-ratna-lata-mangeshkar-one-most-respected-revered-playback-singers-india-having.jpg?w=900" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">Text description for Bharat Ratna Award...</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">NTR National Award </strong> 
            <br />
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYURnHFi8udnWkw3onstMAOV6dlvqGw-9KwuVfY2esvw&s" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(1999): Awarded by the Government of Andhra Pradesh</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">ANR National Award </strong> 
            <br />
            <div className="award-item">
              <img src="https://qph.cf2.quoracdn.net/main-qimg-918c793a03b4dc919983996628c59c52-lq" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description"> (2009): Awarded by the Government of Andhra Pradesh</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">National Film Awards </strong> 
            <br />
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWqTSfZwrOCAfo14YWjP2ZZI7hFmC9HJ6N2XAzTguog&s" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(Three awards): Recognizing excellence in Indian cinema</p>
            </div>
          </li>
          <li className="grid-item">
            <strong className="award-name">Bengal Film Journalists' Association Awards</strong> 
            <br />
            <div className="award-item">
              <img src="https://aknandy.wordpress.com/wp-content/uploads/2017/01/402.jpg" alt="Bharat Ratna Award" className="award-image" />
              <p className="award-description">(12 awards): Recognizing excellence in Indian cinema, particularly Bengali cinema</p>
            </div>
          </li>
          

          {/* Add other awards similarly */}
        </ul>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="container">
      <h1 className="text-center title">Gallery </h1>
      <div className="awards-list">
        <ul className="grid-container">
          {/* List of awards */}
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://images.moneycontrol.com/static-mcnews/2022/02/Lata-Mangeshkar-Asha-Bhosle-AFP-770x433.jpg?impolicy=website&width=770&height=431" alt="Bharat Ratna Award" className="award-image" />
              
            </div>
          </li>
          <li className="grid-item">
             
            <br />
            <div className="award-item">
              <img src="https://c.ndtvimg.com/2020-09/lfhp1u6_asha-bhosle-lata-mangeshkar-_625x300_28_September_20.jpg" alt="Bharat Ratna Award" className="award-image" />
              
            </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW8OUENA4TGHMVxeo_svOOZyqsqGB_UpW3Ghvriq9tA&s" alt="Bharat Ratna Award" className="award-image" />
              
            </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUp3KUnz9IpccWZgrXQqsull5UjVao94IwnOW61Fe0QQ7h9eT-y1h36-N9jcphRjnAOfs&usqp=CAU" alt="Bharat Ratna Award" className="award-image" />
             
            </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qf20ZoFeEwqHvqEJG7nLUUQc4Mg1xiAgnL3Nw_2MZVYAdHZuCZNmgpOERz_w5YV_uJU&usqp=CAU" alt="Bharat Ratna Award" className="award-image" />
              </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://img.jagranjosh.com/images/2022/April/2542022/pm_modi_conferred_first_lata_deenanath_mangeshkar_award.webp" alt="Bharat Ratna Award" className="award-image" />
              
            </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWRMpHZqCy-IrH-qSud8oGYhIhqfbTLpymmuHNbxAKUruVBtk53szSEmxnKE_T2gOYXA&usqp=CAU" alt="Bharat Ratna Award" className="award-image" />
              </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://static.toiimg.com/photo/49128995.cms" alt="Bharat Ratna Award" className="award-image" />
              </div>
          </li>
          <li className="grid-item">
            
            <div className="award-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgYj9uZB4MtaMzQ-eU67AVDTuxQPGn4nz7-UZYvK2RNPbotOv7X66LyM4WZW3Gh7kmR0&usqp=CAU" alt="Bharat Ratna Award" className="award-image" />
              </div>
          </li>
          
          {/* Add other awards similarly */}
        </ul>
      </div>
      
      {/* Contact content here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo and Home Link */}
        <Link className="navbar-brand" to="/">
              <h1 className="navbar-heading">LATA DI</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/biography">Biography</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/songs">Songs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/awards">Awards</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        {/* Footer Section */}
<footer className="footer">
  <div className="container">
    <p className="text-center">&copy; 2024 Tribute Website. Created by Snehal Rai </p>
  </div>
</footer>




      </div>
    </Router>
  );
}



export default App;
