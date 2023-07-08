import { Helmet } from "react-helmet-async";
import { DjProfilePicture, DjBasicInfo, FullPageContainer, RowFlexedContainer2, AnEvent, HeaderOne1, PageContainer, PageSizedContainer, PageLoadingComponent, CustomImageDetailsBox } from "../../styles/GeneralStyledComponents";
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../App";
import { MdLocationPin } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/features/userSlice";
import { useParams } from "react-router-dom";
import Endpoints from "../../utils/APIS";
import { getDjPictures, getPictureDetails } from "../../redux/features/jobPicturesSlice";
import { Modal } from "@mui/material";

export default function DjInfo() {
  const { setNotHomePage } = useContext(ScrollContext);
  const dispatch = useDispatch();
  const params = useParams();

  // Picture details popup states
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    dispatch(getUserInfo(params.djId));
    dispatch(getDjPictures(params.djId));
    if (window.location.pathname !== '/' || window.location.pathname !== '') {
      setNotHomePage(true);
    }
  }, [dispatch, params.djId, setNotHomePage]);

  const { isLoading, selectedUser } = useSelector(state => state.user);
  const { listOfJobPictures, selectedPicture } = useSelector(state => state.jobPicture);

  return (
    <PageContainer>
      <Helmet>
        <title>{`${selectedUser.fullName} - A DJ at Fusee.com`}</title>
        <meta name="description" content={`Dj information.`} /> 
      </Helmet>
      
      
      
      <FullPageContainer style={{ background: '#f1f1f1', marginTop:'40px', color: 'black' }}>
        <PageSizedContainer>
          {isLoading 
            ? 
              <PageLoadingComponent>
                <p style={{ textAlign: 'center', color: 'black'}}>Loading...</p>
              </PageLoadingComponent> 
            :
            <>
              <RowFlexedContainer2 style={{ justifyContent:'flex-start', gap: '30px', alignItems: "center" }}>
                <DjProfilePicture style={{ background: selectedUser.profilePicture !== undefined ? "url('"+Endpoints.APIS.files.profile+selectedUser.profilePicture+"')" : "url('/user-icon.png')", backgroundSize: "cover", backgroundOrigin: "initial", }}></DjProfilePicture>
                <DjBasicInfo>
                  <HeaderOne1 style={{ fontWeight: '600', color: '#1b1d21', textAlign: 'left' }}>{selectedUser.fullName}</HeaderOne1>
                  {selectedUser.alias && <h2 style={{ color: 'gray', fontWeight: '600', fontSize: '140%' }}><strong>Alias: </strong>{selectedUser.alias}</h2>}
                  {selectedUser.description && <p className="description">{selectedUser.description}</p>}
                  <p><strong>Email: </strong>{selectedUser.email}</p>
                  <p><strong>Ratings: </strong>{selectedUser.ratings}</p>
                  {selectedUser.specialities && 
                    <div>
                      <h3 style={{ fontWeight: '600', fontSize: '120%' }}>Specialized in</h3>
                  <p style={{ fontWeight: '500', color: 'grey' }}>{selectedUser.specialities}</p>
                    </div>
                  }
                </DjBasicInfo>
              </RowFlexedContainer2>



              {/* DJ's gallery  */}
              <RowFlexedContainer2 style={{ flexDirection: 'column', justifyContent:'flex-start', gap: '20px', alignItems: "flex-start", marginTop:'40px' }}>
                <h2 style={{ color: 'gray', fontWeight: '600', fontSize: '140%', margin: '0px', padding: '0px'}}>Gallery</h2>
                
                <RowFlexedContainer2 style={{ justifyContent:'flex-start', alignItems: "flex-start", gap: '20px', marginTop: '20px', flexDirection: 'row' }}>
                  {!listOfJobPictures && <p>No pictures yet</p>}
                  {listOfJobPictures && listOfJobPictures.map((element, index) => {
                    return (
                      <AnEvent key={index} onClick={() => {handleOpenModal(); dispatch(getPictureDetails(element._id))}}>
                        <div className='picture' style={{ background: "url('"+Endpoints.APIS.files.pictures+element.picture+"')", backgroundSize: "cover", backgroundOrigin: "initial", }}></div>
                      </AnEvent>
                    )
                  })}
                </RowFlexedContainer2>
              </RowFlexedContainer2>



              {/* DJs assigned events  */}
              <RowFlexedContainer2 style={{ flexDirection: 'column', justifyContent:'flex-start', gap: '30px', alignItems: "flex-start", marginTop:'50px' }}>
                <h2 style={{ color: 'gray', fontWeight: '600', fontSize: '140%' }}>Your events</h2>
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
            </>
          }
        </PageSizedContainer>
      </FullPageContainer>

      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <CustomImageDetailsBox>
          <div className='image-container' style={{ background: "url('"+Endpoints.APIS.files.pictures+selectedPicture.picture+"')", backgroundSize: "cover", backgroundOrigin: "initial" }}></div>
          <div className="image-details">
            <h3>{selectedPicture.name}</h3>
            <p>{selectedPicture.pictureDescription}</p>
          </div>
        </CustomImageDetailsBox>
      </Modal>
    </PageContainer>
  )
}
