import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ReportingActions from "modules/facebook/reporting";

const Reporting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestData = {
      fields: [
        "account_name",
        "campaign_name",
        "adset_name",
        "ad_name",
        "impressions",
        "spend",
        "cpm",
        "cpp",
        "cpc",
        "ctr",
        "reach",
        "frequency",
        "quality_score_organic",
        "quality_score_ectr",
        "quality_score_ecvr",
        "estimated_ad_recallers",
        "estimated_ad_recall_rate",
        "cost_per_estimated_ad_recallers",
        "objective",
        "buying_type",
        "split_test_split",
        "split_test_variable",
        "created_time",
        "date_start",
        "date_stop"
      ],
      level: "ad",
      filtering: [],
      since: "2019-06-20",
      until: "2020-06-30",
      breakdowns: ["region"]
    };
    dispatch(ReportingActions.getReporting(requestData));
  }, []);

  const { error, pending, response } = useSelector(
    state => state.reporting,
    []
  );

  console.log("error >", error);
  console.log("pending >", pending);
  console.log("response >", response);

  return <div>Reporting</div>;
};

export default Reporting;
