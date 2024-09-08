import React from 'react'
import TeamStore from './TeamStore'

const Team = () => {
    return (
        <>
            {/* ##### Team Area Start ##### */}
            <section className="team-area section-padding-100-0">
            <h1 className='text-center' style={{fontWeight:"800"}}>Meet Our Team</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                
                                {/* <p>team of behind this organization.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <TeamStore
                        teamname={"Dr. Himanshu Kumar"}
                        position={"CEO Founder"}
                        image={"founder.png"}
                       /> <TeamStore
                        teamname={"Rasmi patel"}
                        position={"CO Founder"}
                        image={"co-founder.png"}
                       /><TeamStore
                        teamname={"Anurag patel"}
                        position={"Manager"}
                        image={"manage.png"}
                       />
                    </div>
                </div>
            </section>
            {/* ##### Team Area End ##### */}
        </>
    )
}

export default Team