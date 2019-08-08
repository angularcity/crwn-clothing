import { createSelector } from "reselect";

const selectDirectory = state => state.directory;
export const selectDirSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
