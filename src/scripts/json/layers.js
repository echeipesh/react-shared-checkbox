module.exports = {
    "layers": [
        {
            "name": "Density of adults with high school diploma",
            "id": "den_highsc", 
            "description": "This layer, derived from 2000 United States Census data at the block group level, indicates the density of adults over the age of 25 who hold a high school diploma or the equivalent.", 
            "is-mask": "false"
        }, 
        {
            "name": "Density of adults with a college degree",
            "id": "den_college", 
            "description": "This layer, derived from 2000 United States Census data at the block group level, indicates the density of adults over the age of 25 who have earned a college degree.", 
            "is-mask": "false"
        },
        {
            "name": "Low tax value areas needing investments",
            "id": "low_tax", 
            "description": "Revitalization through investment in areas having lower taxable value than average is a priority for the City of Asheville.", 
            "is-mask": "false"
        }, 
        {
            "name": "State development incentive area",
            "id": "stdevzone", 
            "description": "Companies investing in this area may qualify for North Carolina tax credits depending on their type of business.", 
            "is-mask": "false"
        }, 
        {
            "name": "Asheville non residential zoning districts",
            "id": "msk_nonres", 
            "description": "Part of supporting quality economic development in Asheville is protecting the traditional neighborhoods by ensuring compatible land uses. Contact the Planning and Zoning Department to learn about non-residential zoning types for your company\u2019s needs.", 
            "is-mask": "false"
        },
        {
            "name": "Non-residential zoning",
            "id": "zone_nonres", 
            "description": "This layer represents all non-residential areas in the City of Asheville, including business, industrial, institutional, historic, and resort areas", 
            "is-mask": "true"
        }, 
        {
            "name": "Residential zoning",
            "id": "zone_res", 
            "description": "This layer represents all residential areas in the City of Asheville, including single-family (low medium, high density), multi-family (low, medium, high density), and mixed use areas.", 
            "is-mask": "true"
        }, 
        {
            "name": "Office/Business zoning",
            "id": "zone_offbus", 
            "description": "This layer represents all areas in the City of Asheville zoned for office and business use. This is a subset of the non-residential zoning layer.", 
            "is-mask": "true"
        }, 
        {
            "name": "Industrial Zoning",
            "id": "zone_indus", 
            "description": "This layer represents all areas in the City of Asheville zoned for industrial and commercial industrial use.", 
            "is-mask": "true"
        },
        {
            "name": "Proximity to Asheville Transit bus stop",
            "id": "bus_nextto", 
            "description": "Locating a business on transit encourages alternative modes of transportation for workers; this factor includes sites within a x- minute walk of current Asheville Transit routes.", 
            "is-mask": "false"
        }, 
        {
            "name": "Proximity to Interstate ramps",
            "id": "inter_access", 
            "description": "Business owners may wish to have quick access to automobile travel to facilitate business travel for their employees and also for efficient shipment of product.", 
            "is-mask": "false"
        }, 
        {
            "name": "Proximity to major Rivers",
            "id": "river_wa", 
            "description": "The Swannanoa and  French Broad Rivers are amenities that the community treasures. The city supports revitalization of the River District in accordance with best management practices for environmentally friendly development of land.", 
            "is-mask": "false"

        }, 
        {
            "name": "Proximity to dense sewer infrastructure",
            "id": "sewer_density", 
            "description": "City of Asheville recognizes the benefit to its taxpaying citizens of using existing infrastructure to nurture new development whenever possible", 
            "is-mask": "false"

        }, 
        {
            "name": "Proximity to dense water infrastructure",
            "id": "water_density", 
            "description": "The City of Asheville recognizes the benefit to its taxpaying citizens of using existing infrastructure to nurture new development whenever possible.", 
            "is-mask": "false"

        }, 
        {
            "name": "Proximity to bike routes",
            "id": "bike_route", 
            "description": "North Carolina DOT\u2019s Division of Bicycle and Pedestrian Transportation provides bike route maps to help cyclists make good choices about where to ride, based on their own level of cycling ability and traffic handling skills. There are 10 locally signed neighborhood bike routes in the City of Asheville.", 
            "is-mask": "false"
        }, 
        {
            "name": "Proximity to Regional Airport",
            "id": "air_drive", 
            "description": "Business owners may wish to be near the airport for easy access to flights for their employees, additionally certain industries require just-in-time air shipment of goods.  Test.", 
            "is-mask": "false"
        }
    ]
}
