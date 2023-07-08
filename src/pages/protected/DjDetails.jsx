import { Helmet } from "react-helmet-async";
import { FullPageContainer, PageContainer, PageSizedContainer, RowFlexedContainer2, RowFlexedContainerForm } from "../../styles/GeneralStyledComponents";
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../redux/features/userSlice";
import { Button } from "react-admin";
import axios from "axios";
import Endpoints from "../../utils/APIS";

const DjDetails = () => {
  return (
    <div>DjDetails</div>
  )
}

export default DjDetails