import React from "react";
import "../../assets/css/style.css";
import { useState } from "react";

export default function AddPatient() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileno: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First Name: ${formData.firstName}, Middle Name: ${formData.middleName},
Last Name: ${formData.lastName} , Mobile No: ${formData.mobileno}, Message: ${formData.message}`);
  };
  return (
    <div className="content">
      <div class=" container ">
        <form onSubmit={handleSubmit}>
          <div class="card text-bg-white text-center">
            <div class="card-header text-bg-primary ">Basic Information</div>
            <div class="card-body">
              <div class="row gx-1 align-items-left">
                <div class="col-2 mb-1 text-start">
                  <label for="title" className="form-label">
                    Title:
                  </label>
                  <select
                    className="form-select form-select-sm"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="">Select Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                <div class="col-2 text-start">
                  <label mb-3="firstName" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control form-control-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="middleName" className="form-label">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    className="form-control form-control-sm"
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder="Middle Name"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="lastName" className="form-label">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control form-control-sm"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>

                <div class="col-2 text-start">
                  <label for="message" className="form-label">
                    Mobile No:
                  </label>
                  <select
                    id="patient_phone_country_code"
                    className="form-select form-select-sm"
                    name="patient_phone_country_code"
                  >
                    <option value="+91" selected>
                      +91(IN)
                    </option>
                    <option value="+678">+678(VU)</option>
                    <option value="+593">+593(EC)</option>
                    <option value="+84">+84(VN)</option>
                    <option value="+1">+1(VI)</option>
                    <option value="+213">+213(DZ)</option>
                    <option value="+1">+1(VG)</option>
                    <option value="+58">+58(VE)</option>
                    <option value="+1">+1(DM)</option>
                    <option value="+1">+1(VC)</option>
                    <option value="+1">+1(DO)</option>
                    <option value="+39">+39(VA)</option>
                    <option value="+49">+49(DE)</option>
                    <option value="+998">+998(UZ)</option>
                    <option value="+598">+598(UY)</option>
                    <option value="+45">+45(DK)</option>
                    <option value="+253">+253(DJ)</option>
                    <option value="+1">+1(US)</option>
                    <option value="+256">+256(UG)</option>
                    <option value="+380">+380(UA)</option>
                    <option value="+251">+251(ET)</option>
                    <option value="+34">+34(ES)</option>
                    <option value="+291">+291(ER)</option>
                    <option value="+212">+212(EH)</option>
                    <option value="+20">+20(EG)</option>
                    <option value="+372">+372(EE)</option>
                    <option value="+255">+255(TZ)</option>
                    <option value="+1">+1(TT)</option>
                    <option value="+886">+886(TW)</option>
                    <option value="+688">+688(TV)</option>
                    <option value="+1">+1(GD)</option>
                    <option value="+995">+995(GE)</option>
                    <option value="+594">+594(GF)</option>
                    <option value="+241">+241(GA)</option>
                    <option value="+44">+44(GB)</option>
                    <option value="+33">+33(FR)</option>
                    <option value="+298">+298(FO)</option>
                    <option value="+500">+500(FK)</option>
                    <option value="+679">+679(FJ)</option>
                    <option value="+691">+691(FM)</option>
                    <option value="+358">+358(FI)</option>
                    <option value="+685">+685(WS)</option>
                    <option value="+592">+592(GY)</option>
                    <option value="+245">+245(GW)</option>
                    <option value="+1">+1(GU)</option>
                    <option value="+502">+502(GT)</option>
                    <option value="+30">+30(GR)</option>
                    <option value="+240">+240(GQ)</option>
                    <option value="+681">+681(WF)</option>
                    <option value="+590">+590(GP)</option>
                    <option value="+224">+224(GN)</option>
                    <option value="+220">+220(GM)</option>
                    <option value="+299">+299(GL)</option>
                    <option value="+350">+350(GI)</option>
                    <option value="+233">+233(GH)</option>
                    <option value="+44">+44(GG)</option>
                    <option value="+262">+262(RE)</option>
                    <option value="+40">+40(RO)</option>
                    <option value="+43">+43(AT)</option>
                    <option value="+1">+1(AS)</option>
                    <option value="+54">+54(AR)</option>
                    <option value="+358">+358(AX)</option>
                    <option value="+974">+974(QA)</option>
                    <option value="+297">+297(AW)</option>
                    <option value="+61">+61(AU)</option>
                    <option value="+994">+994(AZ)</option>
                    <option value="+387">+387(BA)</option>
                    <option value="+351">+351(PT)</option>
                    <option value="+247">+247(AC)</option>
                    <option value="+376">+376(AD)</option>
                    <option value="+680">+680(PW)</option>
                    <option value="+1">+1(AG)</option>
                    <option value="+971">+971(AE)</option>
                    <option value="+1">+1(PR)</option>
                    <option value="+970">+970(PS)</option>
                    <option value="+93">+93(AF)</option>
                    <option value="+355">+355(AL)</option>
                    <option value="+1">+1(AI)</option>
                    <option value="+244">+244(AO)</option>
                    <option value="+595">+595(PY)</option>
                    <option value="+374">+374(AM)</option>
                    <option value="+267">+267(BW)</option>
                    <option value="+228">+228(TG)</option>
                    <option value="+375">+375(BY)</option>
                    <option value="+235">+235(TD)</option>
                    <option value="+690">+690(TK)</option>
                    <option value="+1">+1(BS)</option>
                    <option value="+992">+992(TJ)</option>
                    <option value="+55">+55(BR)</option>
                    <option value="+975">+975(BT)</option>
                    <option value="+66">+66(TH)</option>
                    <option value="+676">+676(TO)</option>
                    <option value="+216">+216(TN)</option>
                    <option value="+993">+993(TM)</option>
                    <option value="+670">+670(TL)</option>
                    <option value="+1">+1(CA)</option>
                    <option value="+501">+501(BZ)</option>
                    <option value="+90">+90(TR)</option>
                    <option value="+226">+226(BF)</option>
                    <option value="+503">+503(SV)</option>
                    <option value="+359">+359(BG)</option>
                    <option value="+973">+973(BH)</option>
                    <option value="+211">+211(SS)</option>
                    <option value="+257">+257(BI)</option>
                    <option value="+239">+239(ST)</option>
                    <option value="+963">+963(SY)</option>
                    <option value="+1">+1(BB)</option>
                    <option value="+268">+268(SZ)</option>
                    <option value="+880">+880(BD)</option>
                    <option value="+32">+32(BE)</option>
                    <option value="+1">+1(SX)</option>
                    <option value="+673">+673(BN)</option>
                    <option value="+591">+591(BO)</option>
                    <option value="+599">+599(BQ)</option>
                    <option value="+229">+229(BJ)</option>
                    <option value="+1">+1(TC)</option>
                    <option value="+590">+590(BL)</option>
                    <option value="+290">+290(TA)</option>
                    <option value="+1">+1(BM)</option>
                    <option value="+420">+420(CZ)</option>
                    <option value="+249">+249(SD)</option>
                    <option value="+357">+357(CY)</option>
                    <option value="+248">+248(SC)</option>
                    <option value="+61">+61(CX)</option>
                    <option value="+599">+599(CW)</option>
                    <option value="+46">+46(SE)</option>
                    <option value="+290">+290(SH)</option>
                    <option value="+238">+238(CV)</option>
                    <option value="+65">+65(SG)</option>
                    <option value="+53">+53(CU)</option>
                    <option value="+47">+47(SJ)</option>
                    <option value="+386">+386(SI)</option>
                    <option value="+232">+232(SL)</option>
                    <option value="+421">+421(SK)</option>
                    <option value="+221">+221(SN)</option>
                    <option value="+378">+378(SM)</option>
                    <option value="+252">+252(SO)</option>
                    <option value="+597">+597(SR)</option>
                    <option value="+225">+225(CI)</option>
                    <option value="+381">+381(RS)</option>
                    <option value="+242">+242(CG)</option>
                    <option value="+41">+41(CH)</option>
                    <option value="+7">+7(RU)</option>
                    <option value="+250">+250(RW)</option>
                    <option value="+236">+236(CF)</option>
                    <option value="+61">+61(CC)</option>
                    <option value="+243">+243(CD)</option>
                    <option value="+506">+506(CR)</option>
                    <option value="+57">+57(CO)</option>
                    <option value="+237">+237(CM)</option>
                    <option value="+86">+86(CN)</option>
                    <option value="+966">+966(SA)</option>
                    <option value="+682">+682(CK)</option>
                    <option value="+677">+677(SB)</option>
                    <option value="+56">+56(CL)</option>
                    <option value="+371">+371(LV)</option>
                    <option value="+352">+352(LU)</option>
                    <option value="+370">+370(LT)</option>
                    <option value="+218">+218(LY)</option>
                    <option value="+266">+266(LS)</option>
                    <option value="+231">+231(LR)</option>
                    <option value="+261">+261(MG)</option>
                    <option value="+692">+692(MH)</option>
                    <option value="+382">+382(ME)</option>
                    <option value="+590">+590(MF)</option>
                    <option value="+389">+389(MK)</option>
                    <option value="+223">+223(ML)</option>
                    <option value="+377">+377(MC)</option>
                    <option value="+373">+373(MD)</option>
                    <option value="+212">+212(MA)</option>
                    <option value="+960">+960(MV)</option>
                    <option value="+230">+230(MU)</option>
                    <option value="+52">+52(MX)</option>
                    <option value="+265">+265(MW)</option>
                    <option value="+258">+258(MZ)</option>
                    <option value="+60">+60(MY)</option>
                    <option value="+976">+976(MN)</option>
                    <option value="+95">+95(MM)</option>
                    <option value="+1">+1(MP)</option>
                    <option value="+853">+853(MO)</option>
                    <option value="+222">+222(MR)</option>
                    <option value="+596">+596(MQ)</option>
                    <option value="+356">+356(MT)</option>
                    <option value="+1">+1(MS)</option>
                    <option value="+672">+672(NF)</option>
                    <option value="+234">+234(NG)</option>
                    <option value="+505">+505(NI)</option>
                    <option value="+31">+31(NL)</option>
                    <option value="+264">+264(NA)</option>
                    <option value="+687">+687(NC)</option>
                    <option value="+227">+227(NE)</option>
                    <option value="+64">+64(NZ)</option>
                    <option value="+683">+683(NU)</option>
                    <option value="+674">+674(NR)</option>
                    <option value="+977">+977(NP)</option>
                    <option value="+47">+47(NO)</option>
                    <option value="+968">+968(OM)</option>
                    <option value="+48">+48(PL)</option>
                    <option value="+508">+508(PM)</option>
                    <option value="+63">+63(PH)</option>
                    <option value="+92">+92(PK)</option>
                    <option value="+51">+51(PE)</option>
                    <option value="+689">+689(PF)</option>
                    <option value="+675">+675(PG)</option>
                    <option value="+507">+507(PA)</option>
                    <option value="+852">+852(HK)</option>
                    <option value="+27">+27(ZA)</option>
                    <option value="+504">+504(HN)</option>
                    <option value="+385">+385(HR)</option>
                    <option value="+509">+509(HT)</option>
                    <option value="+36">+36(HU)</option>
                    <option value="+260">+260(ZM)</option>
                    <option value="+263">+263(ZW)</option>
                    <option value="+62">+62(ID)</option>
                    <option value="+353">+353(IE)</option>
                    <option value="+972">+972(IL)</option>
                    <option value="+44">+44(IM)</option>
                    <option value="+246">+246(IO)</option>
                    <option value="+964">+964(IQ)</option>
                    <option value="+98">+98(IR)</option>
                    <option value="+967">+967(YE)</option>
                    <option value="+354">+354(IS)</option>
                    <option value="+39">+39(IT)</option>
                    <option value="+44">+44(JE)</option>
                    <option value="+262">+262(YT)</option>
                    <option value="+81">+81(JP)</option>
                    <option value="+962">+962(JO)</option>
                    <option value="+1">+1(JM)</option>
                    <option value="+686">+686(KI)</option>
                    <option value="+855">+855(KH)</option>
                    <option value="+996">+996(KG)</option>
                    <option value="+254">+254(KE)</option>
                    <option value="+850">+850(KP)</option>
                    <option value="+82">+82(KR)</option>
                    <option value="+269">+269(KM)</option>
                    <option value="+1">+1(KN)</option>
                    <option value="+965">+965(KW)</option>
                    <option value="+1">+1(KY)</option>
                    <option value="+7">+7(KZ)</option>
                    <option value="+856">+856(LA)</option>
                    <option value="+1">+1(LC)</option>
                    <option value="+961">+961(LB)</option>
                    <option value="+423">+423(LI)</option>
                    <option value="+94">+94(LK)</option>
                  </select>
                </div>
                <div class="col-2 text-start">
                  <label for="message" className="form-label">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    id="mobileno"
                    name="mobileno"
                    className="form-control form-control-sm"
                    value={formData.mobileno}
                    onChange={handleChange}
                    placeholder="Mobile No"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-2 text-start">
                  <label for="message" className="form-label">
                    Birth Date
                  </label>
                  <input
                    type="text"
                    id="birthDate"
                    name="birthDate"
                    className="form-control form-control-sm"
                    value={formData.birthDate}
                    onChange={handleChange}
                    placeholder="Birth Date"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="gender" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    className="form-control form-control-sm"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="kin" className="form-label">
                    Next of Kin Name
                  </label>
                  <input
                    type="text"
                    id="kin"
                    name="kin"
                    className="form-control form-control-sm"
                    value={formData.kin}
                    onChange={handleChange}
                    placeholder="Next of Kin Name"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="kin" className="form-label">
                    Next of Kin Name
                  </label>
                  <input
                    type="text"
                    id="kin"
                    name="kin"
                    className="form-control form-control-sm"
                    value={formData.kin}
                    onChange={handleChange}
                    placeholder="Next of Kin Name"
                  />
                </div>
                <div class="col-2 text-start">
                  <label for="patientCategory" className="form-label">
                    Patient Category
                  </label>
                  <select
                    id="patientCategory"
                    name="patientCategory"
                    className="form-select form-select-sm"
                    onChange={handleChange}
                  >
                    <option value="-1">Patient Category</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>
              <div class="row"></div>
            </div>
            <div className="card-header text-bg-secondary">Contact Details</div>
            <div className="card-body">
              <div class="row">
                <div className="col-6 text-start">
                  <label for="address1" className="form-label">
                    Address line 1
                  </label>
                  <textarea
                    id="address1"
                    name="address1"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-6 text-start">
                  <label for="address2" className="form-label">
                    Address line 2
                  </label>
                  <textarea
                    name="address2"
                    id="address2"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-start">
                  <label for="area" className="form-label">
                    Area
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    className="form-control form-control-sm"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area"
                  />
                </div>
                <div className="col-2 text-start">
                  <label for="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control form-control-sm"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                  />
                </div>
                <div className="col-2 text-start">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control form-control-sm"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>
                <div className="col-2 text-start">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-control form-control-sm"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                  />
                </div>
                <div className="col-2 text-start">
                  <label for="emailid" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="emailid"
                    name="emailid"
                    className="form-control form-control-sm"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Email id"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div className="col-6 text-end">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
              <div className="col-6 text-start">
                <button type="cancel" className="btn btn-dark">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
