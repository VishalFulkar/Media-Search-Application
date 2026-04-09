import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "./CollectionCard";
import { Link } from "react-router-dom";
import { clearCollection } from "../redux/features/collectionSlice";


const CollectionPage = ({ item }) => {

  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch()
  const clearAllCollection = (item) => {
    dispatch(clearCollection(item))
  }
  return (
    <div className="min-h-screen bg-[#050505]  bg-combined-pattern text-gray-200">
      <div className=" fixed top-0 left-0 w-full z-50 py-5 px-5 flex items-center justify-between bg-[#050505]/60 backdrop-blur-md border-b border-white/5 ">
        <h1 className="text-xl font-bold">Collection Page</h1>
        <div>
          <Link className="text-medium px-4 py-2 rounded font-semibold" to="/">
            Search
          </Link>
          <Link
            className="text-medium px-4 py-2 rounded font-semibold"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            clearAllCollection(item);
          }}
          className="absolute top-22 text-sm font-semibold cursor-pointer transition active:scale-95 right-5 bg-red-800 px-3 py-2 rounded"
        >
          Clear Collection
        </button>
      </div>
      {collection.length > 0 ? (
        <div className="max-w-7xl mx-auto py-20 flex flex-wrap justify-start gap-5 overflow-auto px-10">
          {collection.map((item, idx) => {
            return (
              <div key={idx}>
                <CollectionCard item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/5 ">
          <h1 className="text-white font-bold transition text-2xl">Collection is Empty 😔</h1>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
