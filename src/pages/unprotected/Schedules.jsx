import { Helmet } from "react-helmet-async";
import { AnEvent, FullPageContainer, HeaderOne1, PageContainer, RowFlexedContainer2, PageSizedContainer } from "../../styles/GeneralStyledComponents";
import { MdLocationPin } from "react-icons/md";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../App";

export default function Schedules() {
  const { setNotHomePage } = useContext(ScrollContext);
  
  useEffect(() => {
    if (window.location.pathname !== '/' || window.location.pathname !== '') {
      setNotHomePage(true);
    }
  }, [setNotHomePage]);

  return (
    <PageContainer>
      <Helmet>
        <title>Schedules - Our weekly events</title>
        <meta name="description" content={`Weekly events and jobs.`} /> 
      </Helmet>
      <FullPageContainer style={{ background: 'white' }}>
        <PageSizedContainer style={{ justifyContent: 'flex-start', minHeight: '70vh', minHeight: '70svh'}}>
          <RowFlexedContainer2 style={{ justifyContent:'flex-start', gap: '30px', alignItems: "flex-start", marginTop:'50px', flexDirection: 'column' }}>
          <HeaderOne1 style={{ fontWeight: '600', color: '#1b1d21', width: '100%' }}>Weekly Schedule</HeaderOne1>
            <RowFlexedContainer2 style={{ justifyContent:'flex-start', alignItems: "flex-start", gap: '20px', flexDirection: 'row' }}>
              <AnEvent>
                <div 
                  className='picture'
                  style={{ 
                    background: "url('/pexels-francesco-paggiaro-2111015.jpg')", 
                    backgroundSize: "cover",
                    backgroundOrigin: "initial",    
                  }}
                >
                </div>
                <div className='description'>
                  <div className='day'>
                    <p className='week-day'>Monday</p>
                    <p className='date-time'>{new Date().toDateString()}</p>
                  </div>
                  <p className='date-time'>
                    {new Date().toLocaleTimeString()} to {new Date().toLocaleTimeString()}
                  </p>
                  <div className="location">
                    <strong>Host</strong>
                    <p>Dj Fanta</p>
                  </div>
                  <div className="location">
                    <MdLocationPin />
                    <p>Giporoso</p>
                  </div>
                </div>
              </AnEvent>
            </RowFlexedContainer2>
          </RowFlexedContainer2>
        </PageSizedContainer>
      </FullPageContainer>
    </PageContainer>
  )
}
