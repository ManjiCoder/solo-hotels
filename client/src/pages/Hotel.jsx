/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { showAlertFn } from '../store/slices/AlertSlice';

function Hotel() {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const {
    _id,
    address,
    area,
    city,
    country,
    crawl_date,
    hotel_description,
    hotel_facilities,
    hotel_star_rating,
    landmark,
    locality,
    property_id,
    property_name,
    property_type,
    province,
    room_count,
    room_facilities,
    room_type,
    state: hotelState,
  } = state.data.obj;

  console.log(
    {
      _id,
      address,
      area,
      city,
      country,
      crawl_date,
      hotel_description,
      hotel_facilities,
      hotel_star_rating,
      landmark,
      locality,
      property_id,
      property_name,
      property_type,
      province,
      room_count,
      room_facilities,
      room_type,
      hotelState,
    },
  );
  useEffect(() => {
    if (!state) dispatch(showAlertFn(false, 'Not Allowed', true));
  }, []);

  return (
    <section className="p-7 bg-slate-100">
      {state && (
      <div
        className="relative  shadow-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
        id={_id}
      >
        <span className="flex items-center text-sm absolute right-0 font-bold bg-gradient-to-l from-[#df293a] to-[#d11450] text-white p-2 shadow-md rounded-md">
          {hotel_star_rating[0]}
          <MdOutlineStarPurple500 />
          <span className="ml-1.5">{hotel_star_rating.slice(2, 20)}</span>
        </span>

        <img
          className="rounded-t-lg w-full h-80 aspect-square"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaJtsXaL7tgfbS4pikSnQxJMdzk_LfqMSIg&usqp=CAU"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {property_name}
            {' '}
            -
            {' '}
            <span className="mr-3 text-sm font-bold bg-gradient-to-l from-[#df293a] to-[#d11450] text-white p-2 shadow-md rounded-md">
              {room_type}
            </span>
          </h5>
          <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {address}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {hotelState}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {hotel_description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {room_facilities}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {room_count}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            { property_type}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {province}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {area}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {locality}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {landmark}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {hotelState}
          </p>
        </div>
      </div>
      )}
    </section>
  );
}

export default Hotel;
