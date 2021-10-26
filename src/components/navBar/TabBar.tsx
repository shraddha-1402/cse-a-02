import Tab from "./Tab";

export default function TabBar(props: {
  tabsList: string[];
  pageBody: string;
  setPageBody: { (arg0: any): void; (arg0: any): void; (arg0: any): void };
}) {
  return (
    <div className="tabs-list">
      {props.tabsList.map((name) => (
        <Tab
          key={name}
          pageBody={props.pageBody}
          tabName={name}
          setPageBody={props.setPageBody}
        />
      ))}
    </div>
  );
}
