import React from "react";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Кітап абонементі",
      description: "Кітаптарды үйге 14 күнге алу және мерзімін онлайн ұзарту мүмкіндігі.",
    },
    {
      id: 2,
      title: "Коворкинг және оқу залы",
      description: "Жылдам Wi-Fi, жеке үстелдер және топтық талқылауға арналған аймақтар.",
    },
    {
      id: 3,
      title: "Электронды кітапхана",
      description: "PDF және EPUB форматтағы оқулықтар мен мақалаларға қашықтан қол жеткізу.",
    },
    {
      id: 4,
      title: "Кітап клубтары мен дәрістер",
      description: "Апта сайынғы әдеби кездесулер, шеберлік сабақтары және авторлық кештер.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Көрсетілетін қызметтер</h2>
        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;