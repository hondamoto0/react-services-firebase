import { Hero, ServiceItem } from "components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchServices } from "store/actions/servicesActions";
import { connect } from "react-redux";
const actions = { fetchServices };
const Home = props => {
  const { fetchServices } = props;
  const services = useSelector(state => state.services.items);
  // const services = [];
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const renderServices = services => {
    return services.map(service => {
      return <ServiceItem key={service.id} service={service} />;
    });
  };

  return (
    <div>
      <Hero />
      <section className="section section-feature-grey is-medium">
        <div className="container">
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2">Great Power Comes </h2>
            <h3 className="subtitle is-5 is-muted">
              With great Responsability
            </h3>
            <div className="divider is-centered"></div>
          </div>

          <div className="content-wrapper">
            <div className="columns">{renderServices(services)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  null,
  actions
)(Home);
