<div class="row model_page" id="blog-writer">
  <ul class="nav nav-tabs " role="tablist">
    <li class="nav-item">
      <a
        class="nav-link active"
        data-toggle="tab"
        href="#step1"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="step-number">1</span>Details
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link inactive"
        data-toggle="tab"
        href="#step2"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="step-number">2</span>Title
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link inactive"
        data-toggle="tab"
        href="#step3"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="step-number">3</span>Intro
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link inactive"
        data-toggle="tab"
        href="#step4"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="step-number">4</span>Outline
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link inactive"
        data-toggle="tab"
        href="#step5"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <span class="step-number">5</span>Content
      </a>
    </li>
  </ul>
  <div
    class="grid-margin box-center col-md-8 active"
    id="step1"
    // style="display:none"
  >
    <div class="card border-tab">
      <div class="card-body">
        <div class="card-title">
          <h4
          // style="line-height:24px;text-transform: initial;margin-bottom: 15px;"
          >
            Describe the blog post that you want to create
          </h4>
        </div>
        <form id="aifields" action="" method="post">
          <div class="fields">
            <div class="field_row">
              <div class="field half">
                <label for="language">Language</label>
                <select
                  name="language"
                  id="language"
                  data-select2-id="select2-data-language"
                  tabindex="-1"
                  class="select2-hidden-accessible"
                  aria-hidden="true"
                >
                  <option
                    data-code="us"
                    value="English (US)"
                    data-select2-id="select2-data-2-z7bl"
                  >
                    English (US)
                  </option>
                  <option data-code="gb" value="English (UK)">
                    English (UK)
                  </option>
                  <option data-code="fr" value="French">
                    French
                  </option>
                  <option data-code="es" value="Spanish">
                    Spanish
                  </option>
                  <option data-code="de" value="German">
                    German
                  </option>
                  <option data-code="it" value="Italian">
                    Italian
                  </option>
                  <option data-code="nl" value="Dutch">
                    Dutch
                  </option>
                  <option data-code="pt" value="Portuguese">
                    Portuguese
                  </option>
                  <option data-code="br" value="Portuguese (BR)">
                    Portuguese (BR)
                  </option>
                  <option data-code="se" value="Swedish">
                    Swedish
                  </option>
                  <option data-code="no" value="Norwegian">
                    Norwegian
                  </option>
                  <option data-code="dk" value="Danish">
                    Danish
                  </option>
                  <option data-code="fi" value="Finnish">
                    Finnish
                  </option>
                  <option data-code="ro" value="Romanian">
                    Romanian
                  </option>
                  <option data-code="cz" value="Czech">
                    Czech
                  </option>
                  <option data-code="sk" value="Slovak">
                    Slovak
                  </option>
                  <option data-code="si" value="Slovenian">
                    Slovenian
                  </option>
                  <option data-code="hu" value="Hungarian">
                    Hungarian
                  </option>
                  <option data-code="hr" value="Croatian">
                    Croatian
                  </option>
                  <option data-code="pl" value="Polish">
                    Polish
                  </option>
                  <option data-code="gr" value="Greek">
                    Greek
                  </option>
                  <option data-code="tr" value="Turkish">
                    Turkish
                  </option>
                  <option data-code="ru" value="Russian">
                    Russian
                  </option>
                  <option data-code="in" value="Hindi">
                    Hindi
                  </option>
                  <option data-code="th" value="Thai">
                    Thai
                  </option>
                  <option data-code="jp" value="Japanese">
                    Japanese
                  </option>
                  <option data-code="cn" value="Chinese (Simplified)">
                    Chinese (Simplified)
                  </option>
                  <option data-code="kr" value="Korean">
                    Korean
                  </option>
                  <option data-code="id" value="Indonesian">
                    Indonesian
                  </option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="select2-data-1-8beg"
                  // style="width: 322.039px;"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-language-container"
                      aria-controls="select2-language-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-language-container"
                        role="textbox"
                        aria-readonly="true"
                        title="English (US)"
                      >
                        <span>
                          <i class="flag us"></i>English (US)
                        </span>
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div class="field half">
                <label for="creativity">
                  Creativity{" "}
                  <i
                    class="mdi mdi-help-circle-outline"
                    data-toggle="popover"
                    data-content="Controls randomness: the creativity represents the imagination of the Ai. Lower creativity means lower random results. Increase the creativity if you notice that the results are too repetitive."
                    data-original-title=""
                    title=""
                  ></i>
                </label>
                <div class="select-wrapper">
                  <select name="creativity" id="creativity">
                    <option value="regular" selected="selected">
                      Regular
                    </option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field full">
              <div class="flex items-center content-center justify-between">
                <label for="blog_description">
                  What do you want to write about?*
                </label>
                <span class="text-gray-dark text-xs">
                  <span class="char-cnt">0</span>/200
                </span>
              </div>
              <textarea
                name="blog_description"
                maxlength="200"
                minlength="40"
                id="blog_description"
                placeholder="Explain what is your blog post about (min. 40 characters). e.g. A blog article explaining how copywriting can drive more traffic to your website."
                rows="3"
                required="required"
              ></textarea>
              <span
                class="flex items-center content-center text-xs text-gray-700 ch-left-div"
                // style="margin-top: 4px;"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#ff8a4c"
                  class=""
                  // style="width: 16px;margin-right: 4px;height: 16px;margin-top:2px"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                <span
                  class="ch-left"
                  // style="margin-right: 3px;"
                >
                  40
                </span>{" "}
                more characters needed in your description.
              </span>
            </div>
            <div class="field full">
              <label for="keyword">Targeted Keyword (optional)</label>
              <input
                type="text"
                value=""
                placeholder="e.g. ai copywriting"
                name="keyword"
                id="keyword"
                // style="text-transform: lowercase;"
              />
            </div>
          </div>
          <div
            class="submit-form"
            // style="margin-top: 15px;"
          >
            <button
              type="button"
              class="btn btn-primary"
              id="start"
              disabled=""
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="open-video-explainer"
      data-toggle="modal"
      data-target="#explainerModal"
    >
      <i class="mdi mdi-help-circle-outline"></i>{" "}
      <span>Not sure how this works? Watch the explainer video!</span>
    </div>
  </div>
  <div
    class="col-md-8 grid-margin box-center"
    id="step2"
    // style="display:none"
  >
    <div class="card border-tab">
      <div class="card-body">
        <div class="card-title">
          <h4
          // style="line-height:24px;text-transform: initial;"
          >
            Generate a post title or write your own
          </h4>
        </div>
        <p class="text-gray text-sm">
          Let's generate or write a title for your blog post. The description
          you previously filled and the title you choose will have an influence
          on the generated content.
        </p>
        <div class="submit-form double-btn">
          <button
            type="button"
            class="btn btn-primary generate-group"
            data-model="blog-titles"
            data-name="Generate titles"
          >
            Generate titles
          </button>
          <button type="button" class="btn btn-secondary write-my-own">
            I'll write my own
          </button>
        </div>
        <div
          class="ideas-area"
          id="titles-list"
          data-type="titles"
          data-step="2"
          // style="display:none"
        ></div>
        <div
          class="write-my-own-area"
          // style="display:none"
        >
          <input
            type="text"
            name="blog_title"
            id="blog_title"
            placeholder="Blog title"
            class="to_be_filled"
          />
          <div class="submit-form blog_step">
            <button type="button" class="btn btn-primary next-step" data-id="3">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="col-md-8 grid-margin box-center"
    id="step3"
    // style="display:none"
  >
    <div class="card border-tab">
      <div class="card-body">
        <div class="card-title">
          <h4
          // style="line-height:24px;text-transform: initial;"
          >
            Generate an intro paragraph or write your own
          </h4>
        </div>
        <p class="text-gray text-sm">
          Let's now write your blog introduction which will be the beginning of
          an amazing blog post. You will be able to edit it afterwards.
        </p>
        <div class="submit-form double-btn">
          <button
            type="button"
            class="btn btn-primary generate-group"
            data-model="blog-intros"
            data-name="Generate intros"
          >
            Generate intros
          </button>
          <button type="button" class="btn btn-secondary next-step" data-id="4">
            I'll write my own
          </button>
        </div>
        <div
          class="ideas-area"
          id="intros-list"
          data-type="intros"
          data-step="3"
          // style="display:none"
        ></div>
        <div
          class="write-my-own-area"
          // style="display:none"
        >
          <textarea
            name="blog_intro"
            id="blog_intro"
            placeholder="Blog intro"
            class="to_be_filled"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <div
    class="col-md-8 grid-margin box-center"
    id="step4"
    // style="display:none"
  >
    <div class="card border-tab">
      <div class="card-body">
        <div class="card-title">
          <h4
          // style="line-height:24px;text-transform: initial;"
          >
            Generate an outline (subheadings) for your post
          </h4>
        </div>
        <p class="text-gray text-sm">
          Let's now write your blog outline which will be the structure of your
          article. You will be able to edit it afterwards.
        </p>
        <div class="submit-form double-btn">
          <button
            type="button"
            class="btn btn-primary generate-group"
            data-model="blog-outline"
            data-name="Generate outlines"
          >
            Generate outlines
          </button>
          <button type="button" class="btn btn-secondary next-step" data-id="6">
            I'll write my own
          </button>
        </div>
        <div
          class="ideas-area"
          id="outline-list"
          data-type="outline"
          data-step="4"
          // style="display:none"
        ></div>
        <div class="write-my-own-area" style="display:none">
          <textarea
            name="blog_outline"
            id="blog_outline"
            placeholder="Blog outline"
            class="to_be_filled"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <div
    class="col-md-8 grid-margin box-center"
    id="step5"
    // style="display:none"
  >
    <div class="card border-tab">
      <div class="card-body">
        <div class="card-title">
          <h4
          // style="line-height:24px;text-transform: initial;"
          >
            Would you like to generate a paragraph for each subtitle of your
            outline?
          </h4>
        </div>
        <p class="text-gray text-sm">
          You now have the possibility to generate a single paragraph for each
          subheading of your outline.
        </p>
        <div class="submit-form double-btn">
          <button
            type="button"
            class="btn btn-primary generate-paragraphs"
            data-model="paragraph-writer"
            data-name="Yes, please"
          >
            Yes, please
          </button>
          <button type="button" class="btn btn-secondary next-step" data-id="6">
            No, thanks
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="col-md-12 grid-margin blog-area"
    id="step6"
    // style="display:none"
  >
    <div class="sub-actions">
      <div
        class="copy-content"
        data-toggle="popover"
        data-content="Copy blog post content"
        data-placement="bottom"
        role="button"
        data-original-title=""
        title=""
      >
        <div>
          <i class="mdi mdi-content-copy"></i> Copy content
        </div>
      </div>
      <div
        class="help-"
        data-toggle="popover"
        data-content="<p><strong>Generate</strong> writes a complete new paragraph based on the subheading and the blog title.The generated content is not based on the current content of the section.<br><strong>Write more</strong> is based on the current text of the section, not on the section subheading. It completes the current text of the section.</p>"
        data-placement="bottom"
        role="button"
        data-original-title=""
        title=""
      >
        <div>
          <i class="mdi mdi-information-outline"></i> Help
        </div>
      </div>
    </div>
    <div class="blog-editor-left">
      <div class="blog-editor">
        <div class="editor-title">
          <input
            id="editor-title"
            placeholder="Post title"
            type="text"
            value=""
          />
        </div>
        <p class="exp-p">Post intro</p>
        <div class="editor-section intro">
          <div class="section-content">
            <textarea
              id="editor-intro"
              rows="2"
              // style="overflow: hidden; overflow-wrap: break-word;"
            ></textarea>
          </div>
          <div class="section-tools">
            <div class="panel">
              <div
                class="panel-opt"
                data-toggle="popover"
                data-content="Generate an intro paragraph based on the post title"
                data-placement="top"
                data-original-title=""
                title=""
              >
                <button type="button" class="generate-intro btn primary prc">
                  Generate
                </button>
              </div>
              <div
                class="panel-opt"
                data-toggle="popover"
                data-content="Complete your existing text"
                data-placement="top"
                data-original-title=""
                title=""
              >
                <button type="button" class="write-more btn secondary">
                  Write more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-section">
        <button class="btn white rounded shadow-sm btn-sm">
          <i class="mdi mdi-plus-circle-outline"></i> Add section below
        </button>
      </div>
    </div>
    <div id="blog-options" class="flying">
      <div class="inner">
        <div class="inner-l">
          <a
            class="btn btn-outline-secondary restart"
            href="/blog-writer/"
            data-toggle="popover"
            data-content="Start over"
            data-placement="bottom"
            data-original-title=""
            title=""
          >
            <i class="mdi mdi-arrow-left"></i>
          </a>
          <ul>
            <li class="language-b">
              <span class="label">Language</span>
              <span class="bubble"></span>
            </li>
            <li class="creativity-b">
              <span class="label">Creativity</span>
              <span class="bubble"></span>
            </li>
            <li class="keyword-b">
              <span class="label">Keyword</span>
              <span class="bubble"></span>
            </li>
            <li class="description-b">
              <span class="label">Description</span>
              <span class="bubble"></span>
            </li>
          </ul>
        </div>
        <div class="inner-r">
          <div class="seoscore">
            <strong class="cnt">-</strong>
            <span>SEO score</span>
            <div class="seoscore-details">
              <div class="seo-stats">
                <div class="seo-progress-area">
                  <div class="seo-progress-texts">
                    <div class="seo_plan_name">
                      <span>SEO Score</span>
                    </div>
                    <div class="seo_plan_words">
                      <span>0</span>/100
                    </div>
                  </div>
                  <div class="seo-progress progress-sm">
                    <div
                      class="seo-progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <ul>
                  <li data-tag="content_length">
                    Content is over 800 words long
                  </li>
                  <li data-tag="keyword_in_title">
                    Use Focus Keyword in the main title
                  </li>
                  <li data-tag="keyword_beginning_title">
                    Use Keyword at the beginning of the main title
                  </li>
                  <li data-tag="keyword_density">
                    Keyword density is <span>0</span>% (aim for around 1%)
                  </li>
                  <li data-tag="keyword_in_subheadings">
                    Use Keyword in subheading(s)
                  </li>
                  <li data-tag="keyword_in_content">Use Keyword in content</li>
                  <li data-tag="keyword_beginning_content">
                    Use Keyword at the beginning of your content
                  </li>
                  <li data-tag="number_in_title">
                    Use a number in your main title
                  </li>
                  <li data-tag="short_paragraphs">
                    Use short paragraphs (less than 120 words)
                  </li>
                </ul>
              </div>
              <div
                class="no-focus-keyword"
                // style="display: none;"
              >
                <p>
                  Please enter a focus keyword to calculate the SEO score of
                  this article:
                </p>
                <div class="add-kw-row">
                  <input
                    type="text"
                    value=""
                    id="add-keyword"
                    class="add-keyword"
                    placeholder="Focus Keyword"
                  />
                  <button id="add-kw-confirm" class="btn btn-primary">
                    <i class="mdi mdi-plus"></i> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="wordcount">
            <strong class="cnt">0</strong>
            <span>words</span>
          </div>
          <div class="btns">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-secondary dropdown-toggle"
                data-toggle="dropdown"
                id="export"
              >
                Export<i class="mdi mdi-chevron-down"></i>
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="export"
                x-placement="bottom-start"
              >
                <a class="dropdown-item" id="copy-content">
                  Copy content
                </a>
                <a class="dropdown-item" id="export-html">
                  Html code
                </a>
              </div>
            </div>
            <button
              class="save_article secondary btn"
              data-toggle="popover"
              data-placement="bottom"
              data-content="Save this article"
              id="save"
              data-original-title=""
              title=""
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

/*

<ul class="nav nav-tabs" role="tablist">
    	<li class="nav-item">
        	<a class="nav-link" data-toggle="tab" href="#step1" role="tab" aria-controls="home" aria-selected="false"><span class="step-number">1</span>Details</a>
        </li>
		<li class="nav-item">
        	<a class="nav-link active" data-toggle="tab" href="#step2" role="tab" aria-controls="home" aria-selected="true"><span class="step-number">2</span>Title</a>
        </li>
		<li class="nav-item">
        	<a class="nav-link inactive" data-toggle="tab" href="#step3" role="tab" aria-controls="home" aria-selected="true"><span class="step-number">3</span>Intro</a>
        </li>
		<li class="nav-item">
        	<a class="nav-link inactive" data-toggle="tab" href="#step4" role="tab" aria-controls="home" aria-selected="true"><span class="step-number">4</span>Outline</a>
        </li>
		<li class="nav-item">
        	<a class="nav-link inactive" data-toggle="tab" href="#step5" role="tab" aria-controls="home" aria-selected="true"><span class="step-number">5</span>Content</a>
        </li>
    </ul>

     <div class="w-full"><div class="flex flex-1 flex-col"><div class="flex flex-1 flex-col md:flex-row "><label id="tone" for="tone" class="text-sm font-bold undefined"></label></div><div class="w-full" data-testid="tone-selector"><div class="z-40 w-full sm:text-sm md:text-base w-60 select-dropdown css-b62m3t-container"><span id="react-select-tone-live-region" class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span><div class=" css-13cymwt-control"><div class=" css-hlgwow"><div class=" css-1hjwqhx-singleValue"><span><span class="mr-2">😊</span> Friendly</span></div><div class=" css-19bb58m" data-value=""><input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-tone-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" aria-label="tone" aria-labelledby="tone" role="combobox" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2 / auto / auto; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"></div></div><div class=" css-1wy0on6"><div class=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg></div><span class=" css-1u9des2-indicatorSeparator"></span><div class=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div></div></div></div>


    div class="inline-flex " role="group">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Profile
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Settings
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Downloads
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Downloads
            </button>
          </div>


    */
