import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-left: 30px;
`;

const Left = styled.div`
  width: 40%;
  padding: 20px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  width: 60%;
  padding: 20px;
  border: 1px solid black;
`;

export const Home = () => {
  const [business_stage, setBusiness_stage] = useState("");
  const [age_of_establishment, setAge_of_establishment] = useState(0);
  const [primary_product_service_offered, setPrimary_product_service_offered] =
    useState("");
  const [offered_to, setOffered_to] = useState("");
  const [
    secondary_product_service_offered,
    setSecondary_product_service_offered,
  ] = useState("");
  const [processed_products, setProcessed_products] = useState("");
  const [relevant_experience, setRelevant_experience] = useState(0);
  const [skill_training, setSkill_training] = useState("");
  const [usp, setUsp] = useState([]);
  const [establishment_type, setEstablishment_type] = useState("");
  const [business_area, setBusiness_area] = useState("");
  const [business_locality, setBusiness_locality] = useState("");
  const [infra_ownership, setInfra_ownership] = useState("");
  const [establishment_area, setEstablishment_area] = useState(0);
  const [market_research, setMarket_research] = useState("");
  const [primary_market, setPrimary_market] = useState("");
  const [customers, setCustomers] = useState("");
  const [seasonality, setSeasonality] = useState("");
  const [competition, setCompetition] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [reason_for_location, Setreason_for_location] = useState([]);
  const [marketing_avenues, setMarketing_avenues] = useState([]);
  const [scaleup_potential, setScaleup_potential] = useState([]);

  const changeBusinessStage = (e) => {
    setBusiness_stage(e.target.value);
  };
  const chnageAgeOfEstablishment = (e) => {
    if (e.target.value < 0 || e.target.value > 100) {
      alert("Please select between 0 and 100");
    } else {
      setAge_of_establishment(e.target.value);
    }
  };

  const changePrimaryProducts = (e) => {
    setPrimary_product_service_offered(e.target.value);
  };
  const changeOffered_to = (e) => {
    setOffered_to(e.target.value);
  };
  const changeSecondary_product_service_offered = (e) => {
    setSecondary_product_service_offered(e.target.value);
  };
  const changeProcessed_products = (e) => {
    setProcessed_products(e.target.value);
  };
  const changeRelevant_experience = (e) => {
    setRelevant_experience(e.target.value);
  };
  const changeSkill_training = (e) => {
    setSkill_training(e.target.value);
  };
  const addUsps = (e) => {
    setUsp([...usp, e.target.value]);
  };

  const changeEstablishment_type = (e) => {
    setEstablishment_type(e.target.value);
  };

  const changeBusiness_area = (e) => {
    setBusiness_area(e.target.value);
  };
  const changeBusiness_locality = (e) => {
    setBusiness_locality(e.target.value);
  };
  const changeInfra_ownership = (e) => {
    setInfra_ownership(e.target.value);
  };

  const changeEstablishment_area = (e) => {
    setEstablishment_area(e.target.value);
  };
  const Selectreason_for_locations = (e) => {
    Setreason_for_location([...reason_for_location, e.target.value]);
  };
  const changeMarket_research = (e) => {
    setMarket_research(e.target.value);
  };

  const changePrimary_market = (e) => {
    setPrimary_market(e.target.value);
  };
  const changeCustomers = (e) => {
    setCustomers(e.target.value);
  };
  const changeSeasonality = (e) => {
    setSeasonality(e.target.value);
  };
  const changeCompetition = (e) => {
    setCompetition(e.target.value);
  };
  const changeSuppliers = (e) => {
    setSuppliers(e.target.value);
  };

  const changeMarketing_avenuess = (e) => {
    setMarketing_avenues([...marketing_avenues, e.target.value]);
  };

  const changeScaleup_potentials = (e) => {
    setScaleup_potential([...scaleup_potential, e.target.value]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>LetsEndrose Form</h1>
      <Main>
        <Left>
          <form onSubmit={onSubmit}>
            <label>Stage of Business</label>
            <select name="business_stage" onChange={changeBusinessStage}>
              <option disabled>business_stage</option>
              <option>Start-up</option>
              <option>Scale-up</option>
            </select>
            <label>
              Age of establishment (years) (Enter 0 if it is yet to start-up)
            </label>
            <input
              type="number"
              placeholder="Enter your age of establishment"
              onChange={chnageAgeOfEstablishment}
            />
            <label>Primary Products/Services offfered</label>
            <textarea
              placeholder="enter your products/services"
              onChange={changePrimaryProducts}
            />
            <label>Offered to</label>
            <select name="offered_to" onChange={changeOffered_to}>
              <option disabled>Offered to</option>
              <option>End customers</option>
              <option>Wholesalers</option>
              <option>Distributors</option>
              <option>Retailers</option>
            </select>

            <label>Secondary Products/Services offfered</label>
            <textarea
              placeholder="Enter your Secondary Products/Services"
              name="secondary_product_service_offered"
              onChange={changeSecondary_product_service_offered}
            />
            <label>
              Processed products (Products you produce from the raw materials)
            </label>
            <textarea
              placeholder="enter processed products"
              name="processed_products"
              onChange={changeProcessed_products}
            />
            <label>Years of relevant experience in this field</label>
            <input
              type="number"
              placeholder="Enter your year of experience"
              name="relevant_experience"
              onChange={changeRelevant_experience}
            />
            <label>Skill training</label>
            <select name="skill_training" onChange={changeSkill_training}>
              <option disabled>Skill training</option>
              <option>No formal skill training</option>
              <option>Has formal skill training and certificate</option>
            </select>
            <label>Unique Selling Proposition</label>
            <select multiple="multiple" name="usp" onClick={addUsps}>
              <option disabled> Unique Selling Proposition </option>
              <option>the entrepreneur's experience in this field</option>
              <option>innovative product/service</option>
              <option>high profit margin</option>
              <option>high growth potential</option>
              <option>superior customer support</option>
              <option> quality and affordable products/service</option>
              <option>
                {" "}
                high demand in the target market (forward linkage)
              </option>
              <option>
                abundant supply of raw materials (backward linkage)
              </option>
              <option>
                wide range of products/services, robust value-chain of the
                business
              </option>
              <option>frequency of customer visits</option>
            </select>

            {/* Location */}
            <label>Establishment type</label>
            <select
              name="establishment_type"
              onChange={changeEstablishment_type}
            >
              <option disabled>Establishment type</option>
              <option>Factory</option>
              <option>Mill</option>
              <option>Stall</option>
              <option>Workshop</option>
              <option>Boutique</option>
              <option>Vehicle</option>
              <option>Centre</option>
              <option>Store</option>
              <option>Farm</option>
              <option>Processing </option>
              <option>Unit</option>
              <option>Shop</option>
              <option>Vending </option>
              <option>cart </option>
              <option> Manufacturing unit </option>
            </select>

            <label>Name of the area</label>
            <textarea
              placeholder="Enter your Business Area"
              name="business_area"
              onChange={changeBusiness_area}
            />

            <label>Locality of business</label>

            <select name="business_locality" onChange={changeBusiness_locality}>
              <option disabled>Locality of business</option>
              <option>Urban</option>
              <option>Rural</option>
              <option>Semi-urban</option>
              <option>Slum</option>
            </select>

            <label>Ownership of infrastructure</label>
            <select name="infra_ownership" onChange={changeInfra_ownership}>
              <option disabled>Ownership of infrastructure</option>
              <option>Rented</option>
              <option>Leased</option>
              <option>Self-owned</option>
            </select>

            <label>
              Establishment area (in square feet) (Enter 0 if the establishment
              area is irrelevant){" "}
            </label>
            <textarea
              placeholder="Enter your Establishment area "
              name="establishment_area"
              onChange={changeEstablishment_area}
            />

            <label>Reason for selecting this location</label>
            <select
              multiple="multiple"
              name="reason_for_location"
              onClick={Selectreason_for_locations}
            >
              <option disabled>Reason for selecting this location</option>
              <option>Nearness to market</option>
              <option>Good footfall</option>
              <option>Nearness to source of raw materials</option>
              <option>Nearness to targeted customer demographics</option>
              <option> Lesser competition around</option>
              <option>Access to permit/license of operate</option>
              <option>Nearness to suppliers, Affordability (rent)</option>
              <option> No rental overheads</option>
              <option> Other such factors Screen reader support enabled</option>
            </select>

            {/*   Target Market Section */}

            <label>Market search</label>
            <select name="market_research" onChange={changeMarket_research}>
              <option disabled>Market research</option>
              <option>Not conducted</option>
              <option>Market research has been conducted </option>
            </select>

            <label>Primary market</label>
            <select name="primary_market" onChange={changePrimary_market}>
              <option disabled>Primary market</option>
              <option>Local</option>
              <option>Regional </option>
              <option>National</option>
              <option>International</option>
            </select>

            <label>Customers</label>
            <textarea
              placeholder="Enter Customers category "
              name="customers"
              onChange={changeCustomers}
            />

            <label>Seasons of high sales</label>

            <select name="seasonality" onChange={changeSeasonality}>
              <option disabled>Seasons of high sales</option>
              <option>Consistent sales across all seasons</option>
              <option> Higher sales in festive seasons </option>
              <option>High sales in cropping/cultivation season</option>
              <option>High sales in peak seasons</option>
            </select>

            <label>Competition</label>
            <select name="competition" onChange={changeCompetition}>
              <option disabled>Competition</option>
              <option>
                No similar goods/service provider in this locality
              </option>
              <option>
                {" "}
                Only a few similar goods/service providers in this locality
              </option>
              <option>
                Many similar goods/service providers in this locality
              </option>
            </select>

            <label>List of Suppliers</label>
            <textarea
              placeholder="Identify the distributors in the district"
              name="suppliers"
              onChange={changeSuppliers}
            />

            <label>Marketing avenues</label>
            <select
              multiple="multiple"
              name="marketing_avenues"
              onClick={changeMarketing_avenuess}
            >
              <option disabled>Marketing avenues</option>
              <option>
                Distribution of marketing material (pamphlets/flyers)
              </option>
              <option>storefront/business branding</option>
              <option>Seasonal discounts and offers</option>
              <option>Cross-promotion</option>
              <option>Digital Marketing</option>
              <option>Word of mouth </option>
            </select>

            <label>Avenues of scaling up in future</label>

            <select
              multiple="multiple"
              name="scaleup_potential"
              onClick={changeScaleup_potentials}
            >
              <option disabled>Avenues of scaling up in future</option>
              <option>
                increasing the variety of product/service offering
              </option>
              <option>
                expanding the current offering to other geographies
              </option>
              <option>opening more outlets</option>
              <option> growing the scale of operation</option>
              <option> building value-chain integrations</option>
              <option>other allied revenue streams</option>
            </select>

            <button>Submit</button>
          </form>
        </Left>
        <Right>
          <h1>DATA</h1>
          <div style={{ textAlign: "left" }}>
            <span>
              <b>business_stage :</b> {business_stage}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Age of establishment (years) : </b> {age_of_establishment}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>primary_product_service_offered: </b>{" "}
              {primary_product_service_offered}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Offered to: </b> {offered_to}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Secondary Products/Services offfered : </b>{" "}
              {secondary_product_service_offered}{" "}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Processed products : </b> {processed_products}
            </span>
            <br />{" "}
            <span>
              <b> Years of relevant experience in this field : </b>{" "}
              {relevant_experience}{" "}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Skill training: </b> {skill_training}
            </span>
            <br />{" "}
            <span>
              <b>Unique Selling Proposition : </b> {usp}{" "}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Establishment type : </b> {establishment_type}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Name of the area : </b> {business_area}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Locality of business : </b> {business_locality}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Ownership of infrastructure : </b>
              {infra_ownership}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Establishment area : </b> {establishment_area}
            </span>
            <br />
            <span>
              {" "}
              <b>reason_for_location : </b> {reason_for_location}
            </span>
          </div>
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <br />{" "}
            <span>
              {" "}
              <b>Market research: </b> {market_research}{" "}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Primary market : </b> {primary_market}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Customers: </b> {customers}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Seasons of high sales:</b> {seasonality}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Competition : </b> {competition}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b> List of Suppliers :</b> {suppliers}
            </span>
            <br />
            <span>
              {" "}
              <b>marketing_avenues : </b> {marketing_avenues}
            </span>
            <br />{" "}
            <span>
              {" "}
              <b>Scaleup_potentials: </b> {scaleup_potential}
            </span>
          </div>
        </Right>
      </Main>
    </div>
  );
};
