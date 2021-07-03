import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  
  const {data,loading} = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__animated animate__shakeY">{category}</h2>
      {loading && <p>loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};


export default GifGrid;
