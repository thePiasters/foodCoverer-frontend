import "./PanelButton.scss";

const PanelButton = (props) => {
  const { title, icon } = props;
  return (
    <div className="panel-button" onClick={props.handler}>
      <span id="icon">{icon}</span>
      <span id="title">{title}</span>
    </div>
  );
};
export default PanelButton;
