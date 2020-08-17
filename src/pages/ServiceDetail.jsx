import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchServiceById } from "store/actions/servicesActions";
import { connect, useSelector } from "react-redux";
import { Spinner } from "components";
const actions = {
  fetchServiceById
};
const ServiceDetail = props => {
  const { fetchServiceById } = props;
  const { serviceId } = useParams();
  const service = useSelector(state => state.selectedService.item);
  const isFetching = useSelector(state => state.selectedService.isFetching);
  useEffect(() => {
    fetchServiceById(serviceId);
  }, [serviceId, fetchServiceById]);

  // if (serviceId !== service.id) {
  //   return <Spinner />;
  // }

  if (isFetching && !service.id) {
    return <Spinner />;
  }
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src={service && service.image} alt="Description" />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">{service && service.title}</h1>
              <h2 className="subtitle is-4">
                {service && service.description}
              </h2>
              <br />
              <p className="has-text-centered">
                <button className="button is-medium is-info is-outlined">
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <button>And this is the bottom</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  null,
  actions
)(ServiceDetail);
