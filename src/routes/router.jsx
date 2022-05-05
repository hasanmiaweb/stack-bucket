import { Router, Redirect } from "@reach/router";
import BucketPage from "./../pages/buckets/Buckets";
import BucketDetails from "./../pages/bucket-details/BucketDetails";
import NotFount from "../pages/404/Index";

const AppRouter = () => {
  return (
    <Router>
      <BucketPage path="/" />
      <Redirect from="/buckets" to="/" noThrow />
      <BucketDetails path="/buckets/:bucketID" />
      <NotFount default />
    </Router>
  );
};

export default AppRouter;
