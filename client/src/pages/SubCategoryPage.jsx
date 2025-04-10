import React, { useEffect, useState } from 'react';
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import NoData from '../components/NoData';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
import ConfirmBox from '../components/ConfirmBox';
import toast from 'react-hot-toast';
import UploadSubCategoryModel from '../components/UploadSubCategoryModel';
import EditSubCategoryModel from '../components/EditSubCategoryModel';
import { useSelector } from 'react-redux';
import Table from '../components/Table';
import { createColumnHelper } from "@tanstack/react-table";
import ImageModel from '../components/ImageModel';
import { ImPencil } from "react-icons/im";
import { MdDelete } from "react-icons/md";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import EditCategoryModel from '../components/EditCategoryModel';
>>>>>>> master
import ConfirmBox from '../components/ConfirmBox';
import toast from 'react-hot-toast';
import UploadSubCategoryModel from '../components/UploadSubCategoryModel';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import Table from '../components/Table';
import {createColumnHelper } from "@tanstack/react-table";
import ImageModel from '../components/ImageModel';
import { ImPencil } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import EditSubCategoryModel from '../components/EditSubCategoryModel';
=======
>>>>>>> master
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6

const SubCategoryPage = () => {
  const [showUploadSubCategoryModel, setShowUploadSubCategoryModel] = useState(false);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [openEditData, setOpenEditData] = useState(false);
  const [openConfirmBox, setOpenConfirmBox] = useState(false);
  const allCategory = useSelector(state => state?.product?.allCategory);
  const columnHelper = createColumnHelper();
  const [imageUrl, setImageUrl] = useState("");
  const [editData, setEditData] = useState({
    name: "",
    image: "",
  });
  const [deleteSubCategoryData, setDeleteSubCategoryData] = useState({
    _id: "",
    name: "",
  });
<<<<<<< HEAD

  const fetchSubCategory = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummeryApi.getSubCategory,
      });
      if (response?.data?.success) {
        setSubCategoryData(response?.data?.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubCategoryDelete = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummeryApi.deleteSubCategory,
        data: deleteSubCategoryData,
      });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        fetchSubCategory();
        setOpenConfirmBox(false);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategory();
  }, []);

  const column = [
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("image", {
      header: "Image",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <img
              src={row.original?.image}
              alt={row.original?.name}
              onClick={() => setImageUrl(row.original?.image)}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        );
      },
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: ({ row }) => {
        return (
          <>
            {row.original?.category?.map((categoryItem) => (
              <p key={categoryItem._id} className="flex flex-wrap">
                {categoryItem.name}
              </p>
            ))}
          </>
        );
      },
    }),
    columnHelper.accessor("_id", {
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <button
              className="text-green-600 hover:text-green-800 bg-green-100 p-0.5 rounded cursor-pointer border"
              onClick={() => {
                setOpenEditData(true);
                setEditData(row?.original);
              }}
            >
              <ImPencil size={18} />
            </button>
            <button
              onClick={() => {
                setOpenConfirmBox(true);
                setDeleteSubCategoryData(row.original);
              }}
              className="text-red-500 hover:text-red-600 bg-red-100 p-0.5 rounded cursor-pointer border"
            >
              <MdDelete size={20} />
            </button>
          </div>
        );
      },
    }),
  ];

  return (
    <section className="">
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Sub Category</h1>
        <button
          onClick={() => setShowUploadSubCategoryModel(true)}
          className="border border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 cursor-pointer hover:text-white font-medium"
        >
          Add Sub Category
        </button>
      </div>
      <div className="">
        {imageUrl && <ImageModel url={imageUrl} close={() => setImageUrl("")} />}
        {!subCategoryData[0] && !loading ? (
          <NoData />
        ) : (
          <div className="overflow-auto w-full max-w-[92vw]">
            <Table data={subCategoryData} column={column} />
          </div>
        )}
        {showUploadSubCategoryModel && (
          <UploadSubCategoryModel
            fetchData={fetchSubCategory}
            close={() => setShowUploadSubCategoryModel(false)}
          />
        )}
        {openEditData && (
          <EditSubCategoryModel
            data={editData}
            close={() => setOpenEditData(false)}
            fetchData={fetchSubCategory}
          />
        )}
        {openConfirmBox && (
          <ConfirmBox
            close={() => setOpenConfirmBox(false)}
            confirm={handleSubCategoryDelete}
            data={deleteSubCategoryData}
          />
        )}
      </div>
    </section>
  );
};

export default SubCategoryPage;
=======
  const [subCategoryData, setSubCategoryData] = useState([])
  const [openEditData, setOpenEditData]= useState(false)
  const [openConfirmBox, setOpenConfirmBox] = useState(false);
<<<<<<< HEAD
  const allCategory = useSelector(state => state?.product?.allCategory);
  const columnHelper = createColumnHelper();
  const [imageUrl, setImageUrl]= useState("")
=======
  const allCategory = useSelector(state => state?.product?.allCategory)
>>>>>>> master
  const [editData, setEditData] = useState({
    name:"",
    image: "",
  });
<<<<<<< HEAD
  const [deleteSubCategoryData, setDeleteSubCategoryData] = useState({
=======
  const [deleteCategoryData, setDeleteCategoryData] = useState({
>>>>>>> master
    _id: "",
    name: "",
  })

  const fetchSubCategory = async()=>{
    try {
      setLoading(true)
      const response = await Axios({
<<<<<<< HEAD
        ...SummeryApi.getSubCategory,
        data: subCategoryData
=======
        ...SummeryApi.getCategory,
        data: deleteCategoryData
>>>>>>> master
      })
      if(response?.data?.success){
        setSubCategoryData(response?.data?.data)
      }

    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false);
    }
  }

<<<<<<< HEAD
  const handleSubCategoryDelete=async ()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.deleteSubCategory,
        data: deleteSubCategoryData
      })
      if(response?.data?.success){
        toast.success(response?.data?.message)
        fetchSubCategory()
=======
  const handleCategoryDelete=async ()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.deleteCategory,
        data: deleteCategoryData
      })
      if(response?.data?.success){
        toast.success(response?.data?.message)
        fetchCategory()
>>>>>>> master
        setOpenConfirmBox(false)
      }
    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchSubCategory()
  },[])

<<<<<<< HEAD
  const column = [
    columnHelper.accessor("name", { header : "Name"}),
    columnHelper.accessor("image", { header: "Image",
      cell : ({row})=>{
        return <div className="flex justify-center   items-center">
          <img src={row.original?.image} alt={row.original?.name}
          onClick={()=>setImageUrl(row.original?.image)}
          className='w-10 h-10 cursor-pointer'/>
        </div>
      }
    }),
    columnHelper.accessor("category", {header: "Category",
      cell: ({row})=>{
        return(
          <>
          {row.original?.category?.map((categoryItem, index)=>{
            return <p key={categoryItem._id + "table"} className="flex flex-wrap">{categoryItem.name} </p>
          }) }
          </>
        )
      }
    }),
    columnHelper.accessor("_id", {header: "Action",
      cell: ({row})=>{
        return(
          <div className="flex items-center justify-center gap-2 ">
            <button className='text-green-600 hover:text-green-800 bg-green-100 p-0.5 rounded cursor-pointer border '
            onClick={()=>{
              setOpenEditData(true)
              setEditData(row?.original)
            }}
            >
              <ImPencil size={18}/>
            </button>
            <button
            onClick={()=>{
              setOpenConfirmBox(true)
              setDeleteSubCategoryData(row?.original)
            }}
            className='text-red-500 hover:text-red-600 bg-red-100 p-0.5 rounded cursor-pointer border '>
              <MdDelete size={20}/>
            </button>
          </div>
        )
      }
    })

  ]

=======
>>>>>>> master
  return (
    <section className=''>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Sub Category</h1>
        <button onClick={()=> setShowUploadSubCategoryModel(true) }
         className="border  border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 cursor-pointer hover:text-white font-medium ">Add Sub Category</button>
      </div>
<<<<<<< HEAD
      <div className="">
        
      </div>

      {imageUrl && <ImageModel url={imageUrl} close={()=> setImageUrl("")} />}
      {!subCategoryData[0] && !loading ? <NoData/> : <div className=" overflow-auto  w-full max-w-[92vw] ">
        <Table data={subCategoryData} column={column} />
      </div> 
      }
      {showUploadSubCategoryModel &&  <UploadSubCategoryModel fetchData={fetchSubCategory} close={()=> setShowUploadSubCategoryModel(false)}/>}
      {openEditData && <EditSubCategoryModel data={editData} close={()=>setOpenEditData(false)} fetchData={fetchSubCategory} />}
      {openConfirmBox && <ConfirmBox close={()=> setOpenConfirmBox(false)} confirm={handleSubCategoryDelete} data={deleteSubCategoryData} />}
=======
      {!subCategoryData[0] && !loading ? <NoData/> : 
      <div className="flex flex-wrap gap-2 md:gap-4 p-4 justify-center items-center">
        {subCategoryData && subCategoryData.map((category, index)=>{
          
          return(
            <div className="  w-full rounded max-w-34 border h-58 p-1 flex flex-col items-center justify-center border-dotted border-amber-600 hover:shadow-lg overflow-hidden  " key={index} >
              <div className="w-full  max-h-46 flex items-center  ">
              <img src={category.image} alt="" className=" object-scale-down h-full w-full rounded-t-sm " />
              </div>
              <div className="flex items-center justify-between   gap-1 px-1">
                <button onClick={()=>{
                  setOpenEditData(true)
                  setEditData(category)
                }} className="border  border-green-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-green-500 hover:text-white font-medium">Edit</button>
                <button onClick={()=> {
                  setOpenConfirmBox(true)
                  setDeleteCategoryData(category)
                }} className="border  border-red-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white font-medium">Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      }
      {showUploadSubCategoryModel &&  <UploadSubCategoryModel fetchData={fetchSubCategory} close={()=> setShowUploadSubCategoryModel(false)}/>}
      {openEditData && <EditCategoryModel data={editData} close={()=>setOpenEditData(false)} fetchData={fetchSubCategory} />}
      {openConfirmBox && <ConfirmBox close={()=> setOpenConfirmBox(false)} confirm={handleCategoryDelete} data={deleteCategoryData} />}
>>>>>>> master
    </section>
  )
}

export default SubCategoryPage
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======

  const fetchSubCategory = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummeryApi.getSubCategory,
      });
      if (response?.data?.success) {
        setSubCategoryData(response?.data?.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubCategoryDelete = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummeryApi.deleteSubCategory,
        data: deleteSubCategoryData,
      });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        fetchSubCategory();
        setOpenConfirmBox(false);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategory();
  }, []);

  const column = [
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("image", {
      header: "Image",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <img
              src={row.original?.image}
              alt={row.original?.name}
              onClick={() => setImageUrl(row.original?.image)}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        );
      },
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: ({ row }) => {
        return (
          <>
            {row.original?.category?.map((categoryItem) => (
              <p key={categoryItem._id} className="flex flex-wrap">
                {categoryItem.name}
              </p>
            ))}
          </>
        );
      },
    }),
    columnHelper.accessor("_id", {
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <button
              className="text-green-600 hover:text-green-800 bg-green-100 p-0.5 rounded cursor-pointer border"
              onClick={() => {
                setOpenEditData(true);
                setEditData(row?.original);
              }}
            >
              <ImPencil size={18} />
            </button>
            <button
              onClick={() => {
                setOpenConfirmBox(true);
                setDeleteSubCategoryData(row.original);
              }}
              className="text-red-500 hover:text-red-600 bg-red-100 p-0.5 rounded cursor-pointer border"
            >
              <MdDelete size={20} />
            </button>
          </div>
        );
      },
    }),
  ];

  return (
    <section className="">
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Sub Category</h1>
        <button
          onClick={() => setShowUploadSubCategoryModel(true)}
          className="border border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 cursor-pointer hover:text-white font-medium"
        >
          Add Sub Category
        </button>
      </div>
      <div className="">
        {imageUrl && <ImageModel url={imageUrl} close={() => setImageUrl("")} />}
        {!subCategoryData[0] && !loading ? (
          <NoData />
        ) : (
          <div className="overflow-auto w-full max-w-[92vw]">
            <Table data={subCategoryData} column={column} />
          </div>
        )}
        {showUploadSubCategoryModel && (
          <UploadSubCategoryModel
            fetchData={fetchSubCategory}
            close={() => setShowUploadSubCategoryModel(false)}
          />
        )}
        {openEditData && (
          <EditSubCategoryModel
            data={editData}
            close={() => setOpenEditData(false)}
            fetchData={fetchSubCategory}
          />
        )}
        {openConfirmBox && (
          <ConfirmBox
            close={() => setOpenConfirmBox(false)}
            confirm={handleSubCategoryDelete}
            data={deleteSubCategoryData}
          />
        )}
      </div>
    </section>
  );
};

export default SubCategoryPage;
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
