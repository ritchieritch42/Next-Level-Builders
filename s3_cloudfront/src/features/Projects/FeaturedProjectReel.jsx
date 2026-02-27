import Box from "../../ui/Box";
import Image from "../../ui/Image";
import Card from "../../ui/Card";

const imageFileNameList = [
  "BVD Phase 1 Reception Desk.jpg",
  "admin1.JPG",
  "admin2.JPG",
  "rcptn1.JPG",
  "rcptn2.JPG",
  "ktchn2.JPG",
  "ktchn3.JPG",
  "br1.JPG",
  "office1.JPG",
];

function FeaturedProjectReel() {
  return (
    <Card bgcolor="var(--color-grey-500)">
      <Box stack="horizontal" placement="evenly">
        {imageFileNameList.map((file) => (
          <Image
            width="95%"
            alt={file}
            src={file}
            borderradius="20px"
            padding="10px"
          />
        ))}
      </Box>
    </Card>
  );
}

export default FeaturedProjectReel;
