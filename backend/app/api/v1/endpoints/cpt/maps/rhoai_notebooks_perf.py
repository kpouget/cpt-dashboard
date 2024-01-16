from ....commons.rhoai_notebooks_scale import getData
from datetime import date


################################################################
# This will return a DataFrame from OCP required by the CPT endpoint
################################################################
async def rhoaiNotebooksPerfMapper(start_datetime: date, end_datetime: date, configpath: str):
    df = await getData(start_datetime, end_datetime, configpath)
    df.insert(len(df.columns), "product", "RHOAI Notebooks Perf")
    df.insert(len(df.columns), "ciSystem", "Middleware Jenkins")
    df.insert(len(df.columns), "releaseStream", "rc")
    df.insert(len(df.columns), "buildUrl", "N/A")
    df.insert(len(df.columns), "jobStatus", "success")

    if df.empty:
        return df

    df["startDate"] = df["metadata.start"]
    df["endDate"] = df["metadata.start"]
    df["uuid"] = df["metadata.start"]
    df["version"] = df["metadata.settings.version"]
    df["testName"] = df["metadata.settings.image"].fillna("no test")

    return df
