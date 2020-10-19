import React from "react";
import { useHistory } from "react-router";
import ProjectItem from "components/molecules/ProjectCard";
import "./UserProperties.scss";
const dataList ={
  "results": [
    {
        "id": 34,
        "developer": {
            "id": 45,
            "name": "Assotech"
        },
        "floor_plans": [
            {
                "id": 58,
                "title": "2BHK",
                "inventory": 150,
                "saleable_area": "1200",
                "pricing": "1500000"
            },
            {
                "id": 59,
                "title": "4BHK",
                "inventory": 55,
                "saleable_area": "3200",
                "pricing": "21000000"
            }
        ],
        "amenities": [
            {
                "id": 83,
                "name": "Parking",
                "category": 1,
                "media": [
                    {
                        "id": 398,
                        "media_file": "https://api.capdeal.in/media/media/image_wXrVRkf.jpeg",
                        "media_type": "Image"
                    }
                ]
            },
            {
                "id": 84,
                "name": "Club House",
                "category": 15,
                "media": [
                    {
                        "id": 399,
                        "media_file": "https://api.capdeal.in/media/media/image_f80F39N.jpeg",
                        "media_type": "Image"
                    }
                ]
            }
        ],
        "media": [
            {
                "id": 395,
                "media_type": "Image",
                "media_file": "https://api.capdeal.in/media/media/image_2j5z7FR.jpeg",
                "object_id": 34
            },
            {
                "id": 396,
                "media_type": "Image",
                "media_file": "https://api.capdeal.in/media/media/image_kA7VZjB.jpeg",
                "object_id": 34
            },
            {
                "id": 397,
                "media_type": "Image",
                "media_file": "https://api.capdeal.in/media/media/image_2TgCdgA.jpeg",
                "object_id": 34
            }
        ],
        "video": null,
        "broucher": null,
        "features": [
            {
                "id": 21,
                "media": {
                    "id": 401,
                    "media_type": "Image",
                    "media_file": "https://api.capdeal.in/media/media/image_GFoR7wy.jpeg",
                    "object_id": null
                },
                "description": "5 Km from School"
            },
            {
                "id": 20,
                "media": {
                    "id": 400,
                    "media_type": "Image",
                    "media_file": "https://api.capdeal.in/media/media/image_sa8lvGP.jpeg",
                    "object_id": null
                },
                "description": "5 Km from Hospital"
            }
        ],
        "min_price": "45.00L",
        "max_price": "55.00L",
        "name": "Assotech Windsor Court",
        "description": "Assotech Limited is redefining the retail real estate with Hi-Street at Crossing Republik, Ghaziabad.",
        "rera_no": "878787878787",
        "address_line1": "Sector 78",
        "address_line2": "Noida extension",
        "city": "Noida",
        "state": "Uttar Pradesh",
        "zipcode": "201301",
        "media_url": null,
        "status": "Ready to move",
        "property_type": "Residential/Apartment",
        "home_page": true,
        "is_feature": true,
        "created_at": "2020-10-12T08:01:53.268922Z"
    },
    {
        "id": 32,
        "developer": {
            "id": 18,
            "name": "shubaham builder"
        },
        "floor_plans": [
            {
                "id": 55,
                "title": "4BHK",
                "inventory": 43,
                "saleable_area": "sdf",
                "pricing": "34rwe"
            }
        ],
        "amenities": [
            {
                "id": 81,
                "name": "sdf",
                "category": 4,
                "media": [
                    {
                        "id": 384,
                        "media_file": "https://api.capdeal.in/media/media/image_bbnuLND.jpeg",
                        "media_type": "Image"
                    }
                ]
            }
        ],
        "media": [],
        "video": null,
        "broucher": null,
        "features": [
            {
                "id": 17,
                "media": {
                    "id": 385,
                    "media_type": "Image",
                    "media_file": "https://api.capdeal.in/media/media/image_4vrT1cG.jpeg",
                    "object_id": null
                },
                "description": "jiu"
            }
        ],
        "min_price": "10.00L",
        "max_price": "40.00L",
        "name": "aman kumar",
        "description": "rerwerwer",
        "rera_no": "234234",
        "address_line1": "m 421",
        "address_line2": "gali no.05",
        "city": "Noida",
        "state": "Not applicable",
        "zipcode": "201301",
        "media_url": null,
        "status": "Mid Stage",
        "property_type": "Squareyards",
        "home_page": false,
        "is_feature": false,
        "created_at": "2020-10-11T18:44:07.182964Z"
    },
    {
        "id": 14,
        "developer": {
            "id": 14,
            "name": "anirudth builder"
        },
        "floor_plans": [
            {
                "id": 21,
                "title": "fds",
                "inventory": 43,
                "saleable_area": "4e32",
                "pricing": "3213"
            }
        ],
        "amenities": [
            {
                "id": 40,
                "name": "fdsfds",
                "category": 4,
                "media": []
            }
        ],
        "media": [
            {
                "id": 179,
                "media_type": "Image",
                "media_file": "https://api.capdeal.in/media/media/image_jQwQ1Vs",
                "object_id": 14
            }
        ],
        "video": {
            "id": 177,
            "media_type": "Image",
            "media_file": "https://api.capdeal.in/media/media/a_ngXnWf0.m4a",
            "object_id": null
        },
        "broucher": {
            "id": 178,
            "media_type": "Image",
            "media_file": "https://api.capdeal.in/media/media/GTmetrix-report-www.fwd.co.th-20200814T015147-3Zp4bQwo_JYthp0r.pdf",
            "object_id": null
        },
        "features": [],
        "min_price": "0.00L",
        "max_price": "0.00L",
        "name": "Aakash Bathla",
        "description": "fds",
        "rera_no": "321",
        "address_line1": "681,diwan nagar, kacha camp, Panipat",
        "address_line2": "681,diwan nagar, kacha camp, Panipat",
        "city": "Panipat",
        "state": "haryana",
        "zipcode": "132103",
        "media_url": null,
        "status": "Ready to move",
        "property_type": "Factory",
        "home_page": true,
        "is_feature": true,
        "created_at": "2020-10-11T17:01:55.594922Z"
    },
  ]

}
const UserProperties = () => {
    const history = useHistory();
    const goToAddLink = () => {
    history.push({
      pathname: `/user/add-properties`,
    });
  };
  return (
    <div className="user-properties">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Properties List</h2>
        </div>
        <div className="col-12 col-md-6 text-right">
          <button
            className="btn btn-round"
            title="Add Properties"
            onClick={() => {
                goToAddLink();
            }}
          >
            <i className="zmdi zmdi-plus"></i>
          </button>
        </div>
      </div>
      <hr className="mb-4 pb-3" />
      <div className="row user-profile_content">
        <div className="col-12">
          {dataList &&
            dataList.results &&
            dataList.results.map((val, key) => {
              return (
                <>
                  <ProjectItem
                    propertyTableId={`table${key}`}
                    value={val}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UserProperties;
