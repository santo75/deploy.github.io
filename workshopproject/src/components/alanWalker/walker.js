import React, { Component } from 'react';
import './walker.css';
import Navbar from './../Navbar/Navbar';

class Career extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid wrapper">
                    <Navbar></Navbar>
                    <div className="row">
                        <div className="career col-md-12">
                            Career
                        </div>
                        <div className="career-box col-md-12">
                            <div className="col-md-12 career-box-images">
                                <img src="/aw1.jpg" className="aw1 col-md-6"/>
                                <img src="/aw2.jpg" className="aw1 col-md-6"/>
                            </div>
                            <div className="careerDetails col-md-10 offset-md-1">
                                In 2012, Walker was listening to a song by Italian DJ David Whistle (also known as DJ Ness) and reached out to him to find out how he produced his music. He was inspired by EDM producers K-391 and Ahrix, and by film composers like Hans Zimmer and Steve Jablonsky. He started producing his music on his laptop using FL Studio. In July 2012, with the help and feedback from his fans online, he began pursuing his music production career and slowly began posting his music to YouTube and SoundCloud. Starting as a bedroom producer, he was better known as DJ Walkzz before signing a record deal and releasing his debut single in 2014. Walker released the track "Fade" on 17 August 2014. The track gained attention after its re-release via the record label NoCopyrightSounds on 19 November 2014. Walker stated that the creation of the track was inspired by K-391 and Ahrix, whose tracks were also picked up by the record label. The track has over 400 million views on YouTube, 115 million plays on Spotify, and 41 million streams on SoundCloud. The tracks "Spectre" and "Force" followed in 2015. Walker signed with MER Musikk under Sony Music Sweden and released his next single, "Faded", a remastered vocal version of "Fade". It was released on 8 December 2015 and featured uncredited Naustdal pop singer Iselin Solheim. The single topped the year-end charts in Austria, Germany, Switzerland and Sweden, iTunes charts in 33 countries, as well as entering top 10 in Spotify Global Chart. The music video on YouTube has over 2.6 billion views and 18 million likes, placing it among the top 10 most liked YouTube videos. It has over 1.1 billion plays on Spotify, and is also one of the Top 10 Most Shazamed tracks of 2016. The single also received official remixes from Tiësto,Dash Berlin, and Hardwell. He later released an acoustic "restrung" version of the song, with all the EDM elements taken out.
                            </div>
                        </div>
                        <div className="awards col-md-12">
                            Awards, Tours and Support
                        </div>
                
                        <div className="col-md-4 head-para">
                     
                            <h1 className="subheading-section-2">Awards</h1>
                            <p className="para-details">Årets Musikk (Music of the Year)</p>
                            <p className="para-details">Best Norwegian Act</p>
                            <p className="para-details">Best International Hit</p>
                            <p className="para-details">European Border Breakers Award</p>
                            <p className="para-details">Best Western Artist of the Year</p>
                            <p className="para-details">Best Western Single of the Year</p>
                            <p className="para-details">Best New Talent</p>
                 
                        </div>
                        <div className="col-md-4 head-para">
                   
                            <h1 className="subheading-section-2">Supporting</h1>
                            <p className="para-details">Rihanna – Anti World Tour (2016)</p>
                            <p className="para-details">Justin Bieber – Purpose World Tour (2017)</p>
                            <p className="para-details">Martin Garrix – Thursdays at Ushuaïa</p>
                    
                        </div>
                        <div className="col-md-3 head-para offset-md-1">
                  
                            <h1 className="subheading-section-2">DJ</h1>
                            <p className="para-details">DJ Magazine Top 100 DJs</p>
                            <p className="para-details">In year 2016 , 55 position in New Entry</p>
                            <p className="para-details">In year 2017 , 17 position in Up 38</p>
                            <p className="para-details">In year 2018 , 36 position in Down 19</p>
                            <p className="para-details">In year 2019 , 27 position in Up 11</p>
                   
                        </div>

                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Career;