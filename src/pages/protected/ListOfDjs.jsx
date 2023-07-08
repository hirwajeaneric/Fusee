import { Helmet } from "react-helmet-async";
import { FullPageContainer, PageContainer, PageSizedContainer, RowFlexedContainer2 } from "../../styles/GeneralStyledComponents";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import DJsTable from "../../components/tables/DJsTable";
import { getAllUsers } from "../../redux/features/userSlice";

export default function ListOfDjs() {
  const { setNotHomePage } = useContext(ScrollContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setNotHomePage(true);
    }
    dispatch(getAllUsers());
  }, [setNotHomePage, dispatch]);

  const { listOfDJs, isLoading } = useSelector(state => state.user);

  return (
    <PageContainer>
      <Helmet>
        <title>List of DJs - List of all available djs</title>
        <meta name="description" content={`List of all available bookings.`} /> 
      </Helmet>
      <FullPageContainer style={{ background: '#f1f1f1', color: 'black' }}>
      <PageSizedContainer style={{ paddingTop: '30px' }}>
          <RowFlexedContainer2 style={{ flexDirection: 'column', justifyContent:'flex-start', alignItems: "center", minHeight: '40vh' }}>
            {isLoading ? <p>Loading...</p> : 
              <>
                <h2 style={{ fontWeight: '600', color: '#1b1d21', textAlign: 'left', width: '100%' }}>Lisf of DJs</h2>
                <DJsTable data={listOfDJs} />
              </>
            }
          </RowFlexedContainer2>
        </PageSizedContainer>
      </FullPageContainer>
    </PageContainer>
  )
}
