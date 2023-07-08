import { Helmet } from "react-helmet-async";
import { AnEvent, FullPageContainer, PageContainer, PageSizedContainer, RowFlexedContainer2 } from "../../styles/GeneralStyledComponents";
import { MdLocationPin } from "react-icons/md";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../App";
import SearchForm from "../../components/SearchForm";

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
        <title>Search results</title>
        <meta name="description" content={`Search results of schedules and djs.`} /> 
      </Helmet>
      <FullPageContainer style={{ background: 'white' }}>
        <PageSizedContainer>
          <RowFlexedContainer2 style={{ justifyContent:'flex-start', alignItems: "flex-start", marginTop:'50px', flexDirection: 'column' }}>
            <RowFlexedContainer2 style={{ justifyContent:'center', alignItems: "center", flexDirection: 'column', marginBottom:'20px' }}>
              <SearchForm />
            </RowFlexedContainer2>
            <RowFlexedContainer2 style={{ justifyContent:'flex-start', alignItems: "flex-start", marginTop:'20px', flexDirection: 'column' }}>
              <h2 style={{ color: '#1b1d21' }}>Search Results</h2>
              <RowFlexedContainer2 style={{ flexDirection: 'column', justifyContent:'flex-start', gap: '30px', alignItems: "flex-start", marginTop:'20px' }}>
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
                        <MdLocationPin />
                        <p>Giporoso</p>
                      </div>
                    </div>
                  </AnEvent>
                </RowFlexedContainer2>
              </RowFlexedContainer2>
            </RowFlexedContainer2>
          </RowFlexedContainer2>
        </PageSizedContainer>
      </FullPageContainer>
    </PageContainer>
  )
}
