import React from 'react';
import Docs from './es/index.mdx';
import { WiseFormWizard } from '../wizard';

export /*bundle*/ function View() {
  return (
    <div className="page__container">
      <Docs />
      <WiseFormWizard />
    </div>
  );
}
