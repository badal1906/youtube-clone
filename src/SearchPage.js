import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
      image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGRgaHBweGhocHB4aHhweHBwaHBocHB8cIS4lHB4sIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrISU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xAA+EAACAQIEBAQDBgMHBAMAAAABAhEAAwQSITEFQVFhBiJxgRMykRRCobHB8FLR4RUjYnKCkqIHFiTxM0NT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgIDAQEAAgMBAQAAAAAAAAECEQMhMRJBIlEEE2FxMv/aAAwDAQACEQMRAD8A2+AvhkjrWS8b8HzoXA8yz9KYcExWwmtBibIdDzrVq0Ph+e71ul+IUgzWw8VcMNm6wjynUVmcTbkVjVFE8LjCCJ571q+CYzQoeeorCA6e9OuH4qPWlwB/exmV4PWjvt2kTp3pThpcTuRV1q6DKstFsC66SGDA07wF8gCl2EZAMrVNL+QxOlDA01w5lzCs9xfCcwKcYW+CBU8VZDAjt+NJaEzL4Z9CJ6/v86X3rY1+tF4pCjxG9M+GeFb99gRbcIYlyOR5gEjNyrVNENGWuqN/Sj7OJmNe4re4b/pmuRRcv665gF09N5q0/wDTO2MuXEsImZUGZ256U/SCjCmZBolH0/CtZiPAF0DyXEf1ldOXWkmN4Hes/PbaOwkH6VUZJiaEmOudDrRuBTOuvTT2pfj1k9P3tVvDL8eWaiXRouxele4O9yiqMfekxUVeIIpxExljyctecMcggzrzrmuBhtr+lC3gUIIqZqykbWzdGWoYuMtKOF4oka01e2StcteZG2mgLh0ZqY4i2CRSjC3ArQTzoy5ifNqack7saqjR4dQEFLXfU+tRTiICb0kGNclso51zwxybYOSNLhsQJHYVdjL0iKx1vEtJBNN7eN8mu4qnhadouE0A4lfMfWupddxhJNdW9MLRbw3ElSAa23C8UGEGsDcEGetOuEcQiO1dnDm6gnxzwf4lokDzLqK+Q3l5c6+/3LgdDz0/Svj/AIs4Z8O5mA8rGokvoRfwx19YNe2XysKMvW5ojgvhu9imf4WQBIzM7BAM0xvvsakdBWAxUa8juKZNYmHVjHOm/AfAOWftOJtpqD5HDyOa6xlPfX0rSP4XwCmExTheaeVvo0SPxqf8HaMNezDUNNHIucbaxrW5tcA4aBrnfWZLmT20IoyxhMChJSwNRBzGR7STFFE+kjC4O7AAPKnnDka6QqCT+9TT2++DJlsNb19AfXSr8NjrNhSLaRuQJB/E61X9UnxEvLBdYVw3gqW5a6EZjBiASCO5phd4hGi6elZY8XLeYtvXgx4y5mOnT98q0jhSMpZ74PbvEDuNPWqkxzNWYbj9vNBMdzP5mibWKmCGkcq6IwitGEssmaS3j2GlF2uIg6PH0rLNeidaoHEW+4pPem8MXtAs0lRpcfwLDYhWBQSxnpr1kbHSsd4i8M3cyFFBC+VVVVUKvLXdjM704w/F2EBgV700/tMlQdJ671jLA70brNGtmCfwRinIhVWPvFtI9qcYD/p65Q/FvKH+6F1HvOpphjvEARiGfXpM/gKD/wC4Gb5EdvaPzrNqMevZcXKW0nQXa8CW1PmxProP50Z/21gVHncsesx+VJvtV9zqAn41VewbES7s3bYVDa+bKqS/Q9TC8OtmRqRykwaofEYfK2XMxMxGgXpvvS23wxEXO403I/LeluJ4pLGAFUbDpUSVrhUWxdxF4cxULFx3NVXruZ60PDMMmhG9KUlGNlJNsGHDnaI50fZ4YUQTuN6bIoUirjdUK01yf3yb0aeNGb+w5nnlFEcQs5U06VC5jlDb0r4jxifLXRFt9J0kBfCrqYWiCBtXla0RYJc1Ee4rxHKkEVRaua5elE4cjVTWz2C0zScIxUiJ0NU+IeEfEskR5hJWlGCxGR8vfStOMUHSR9KQ2vp8Zv2yrFTuNKrwmLay4dRI+8h0DDp6961HjPh2VviqNDvWUdZrNoDf8GxWGxYyoclyNUbf1U/eHpTJOCoNGXWvkaOyMHQlWBkEaEHtX1Pwr4yt4hVtYghLw0DHRX7g8m7UmrHF0X3uAAaozD3NCXuHOP8A7mrXvhpGhpRjLJrBxkjdOD+IyGJN1DpcYnvTHBcZZhkcQw0mvWwuZ2MbVBuBXXGZAMw2WYJq8U5qVInPhxyhb0WJipQHodPaquNcYWyoLAsx1A6yefaluHzqxS4pRgdVbT09R3ozi3DhiEWTlI2aJjnt0ruUm0eY4xUlfAXh3iS65ObDBkgyVB2G8E6E064e6EB7LSjbRrB6EHasynhfExlS+Anq4338tPeC8E+zKwLli2p5D2HWqxqV7DI4Vpj93GUGSZ/YpfxTjPwh8Kzla7EwxCqg/iafyonD3nIy/D25yI7/ANBS/iXhSzeLPmdXYySDz9DXRKMvP4mMHFS2Kb/H7qXlVnFwMFzAZSATyXKNK2TXWW2es6e/9aRcI8JW7Jzks7AyuYAKCNjA3NaBtTBMzpWLU1FnR+MpR/X0F4bhFMlhLHUk608tYURoBUG4c4ysimRE+lGJbcD5TXDDG3bl07smSK/GHCC21G9efDDEaaVNxlkt5R30rO8V8SqAUtGW2Lch6dTXRGKijkcnJ0d4h4gC2RTou/rSF1DCOdQttJ1Ya61e9wbDWs5O2bRjSE95shgmnXC+IERrS3HYYtrFK7bsrEdKylH0qGnTN6/FBA1oDG8X8pg1mPt7bVH4rHfWoWKKG5thP2wk1B968spJqd22Yq+AEWsZAFdS74ddTsVBaP55o5DrNL2EPrsaY4YSDHIVopA0Tua+Yb0Zw7HFW12jWgkOlDO+U0NjQ+x2HW8jL12r5nfsFHZGGxr6LgroyikXjHh0gXkGv3qT2Bjb6UA+lNDrQeKtVImPOB+LcTYAUXCyfwv5h7E6it1hONPdwxxDoioXyKATLMBLEdhpXx4V9D4JcD4CwpPyXro/3ZG/Wm0CZqOG8RtkGQJ515xG+U8yfvnWbxuFfNNpSew51dwziZZhZdWznQKQZn0qloUm30fDH2cSgW8gzDZtmX0IqJ4c6CbTq6/wt5W/kaB4lwK9bX4ijTmAdRTHDcRt2bRN1grRrmM6nbKBtHP0rSLf0ylFCrE8TvJp8Bvpp9djSx+IYqZ+GQO/9Kv4x4jxSk/BtZ7f3XX+8Vh/p29DSN/EWKJkyp/yZfwiq9tfSFjT+D21xi+F1y+mQ6f8hVQ4riCQRlb/ACgyPVTqKQ/2/iRzJ9VB/SjMBxbFMT/4a3A2hm2V/wCYgD1prK/2H9K/Ro+FcRv3nyKsnn29ela/BcOVGDu5Zhy2AP60n4C9u1ZVEyLcibiBxcZWPJ3XQntypmlwse1P22ulKCix19sFROKnnSlsQBz9qpfiKJqWA96zbLqwrxExbDXeyGvm+EtZl6mt/a4oj27oYymR5nTYGsBw25B1NRJ2giqYVZswdY96KvXhH9KpxQ1kD0qKmeY16VmahVi6CsRS2/gGmasDFSBrrzp5gHDATFJsdWjL2OGXHJVEJp5gPDd8RmT8a2PBMKqyQKehK48/8mUL8o1jhj9MKfDLrLH6Ck+MwvnCivo+OcBSe1fPRfzXT01qP4/8iWRNsrJjiqo8/ss11NfijrXV0+mZ+TFm/nTuIprhrmWG+6RWbw94xFM8HiwAbbfK2x6HlV+vyMnwLN/zada9KEyelT4fgNweWs9aKxCgLpvVXYkynBXDtTNFDoUbYiKRYd9SOYpxhbnOqiWYXimDNq4VO3KgrqSK23irAfEt51HmX8qxNt6YhbfSDWt8IL8Wzcsj5ldbg7hgUIHvk+tZ/E25FaTwFhWRL+J1AXLbQ8izyzD1CgH3FMXD6Fa4alu2vxHykDlvQx4zZtt5EzPy0zP+G1ZfFYi5cuomfykEv1gcgeUzTbE8S+zWHdIXKsLG5Y6KCdzVohsKfxS6uPiWmCjVgRGnKRuOVL+M8cwpb4htIWynRyTHYCYg6iIrJ4W1duAPecgHUgaFj1Y86OF6wAM6KXXTUTI5Gq2kZOpS0ZlcQc5dRkzEmFlQJMgCOWulH2uKXRtdcf62/nQvF8b8W+zjbygDbRVAGntVQurWDs6Y8GrcWvGZuuf9RqD3nceZ2I7sT+dAfHXrUxiBtNJtlKjY+A8KXuOiso0Xc+vStXiMSUOSCX2gbk/yrHeC8HiWuZ7XkQiHc9OYHetZbZ7bufhu4B1uBcx9I3IrXGnRhOSvQLe4Pi7pnOiA8oJPua9TwpdGrutxu8gU6tcbtGMxyno0qfoac4a8jjysDVNISbPnXHWuWLLLcGV7jZQB8oQanXaSYrOWbsazFfZOLcGTE2zauA5T8rA6qwHlYe/Kvi4XIxVtwSD6gwfyqJKik76O8Mc66masFsLzAoPC38vOjHcHbaoLQPiXBMDeiMBeCka+tBMmszFTkAik1aKTPpXAXlZp4TpWV4Bd8g1p8LpIrz8kG2zsXEZTxTx9UZrfONawrY7WQau8dKy4gk86zYuzXThxRhGkc85Nsff2k/WupF8Q9a6tfKIth1u0YzDccquddiOcUebYAnSKGW3MjqNKiSMzS4Fs6L15HrG9B46/54FR4dxAhMhEMrSPQiDQT3IbN3ocqjoV7PbNtg7N60TgMUQ2RvapJeUT3rx01zHlVqWg9OxqnmBU7HSsBxnBGzeI5EyK3GGxAJkUD4jwYvJmA8y/WtFstMxziRW7xGH+z4axhgYKp8W53e6A0f6VyL9aw+AEsqt/EAfrBrS+LcdcDuxgkk8+hj8IoEynhWIBvPJ+VQB7kzVnH7hfJaQFho7mDE8hWNw+LdWz6wdD3o846dcx+pFVdEtWjS/CIUaR66fnSXGr1cdo1oe0zOdAzfl9a7EIE0OrnlyFDnZMcaiLAktp1rx7ZBopcIykE6A0T9lbbf1qLNKFRnmAK9tqJkmiuI4ZhuIgVW2DIXbWJpgbHhXiq95EthERABtObrW2wxS6ufMyP/EjEfUbH3FfGMKzIVYcwfwrVcF486jKontp+E1pCVdOfLBtXHptn409lgmLVLtltBcyiV/zjUEdxReM4aqobuEIUxmCA+Ruw18vtWbxOOuPbIayxBHSf1pNwTxTcwbZHRmsk6qZlZ/h/lTk18DE5VUj6N4c8RfEQFxB2Zen7NYzx5wg2sT8RNbd7zrGwbTOp9/N71bi8RaDJiMM4a1dYhgN0eJgjvr9K0N8DE4J7Zgugz2/8yCY91ke9T/hq19MHbByjYUQjmNdaEFyQKuwwk61m+lo9e72+tRcyJMT2qWPs5ToKHU0WUPeD8VKkAntW8wN+VBPSvlY8jAitLw7jqqsE1hOFs3hPVCT/qM0uIrHJbNO/E2N+I80sQ6VfFRHWV5DXVdmFdRY/IxwF46Az0INE37eRtORn2NcQCu2oqTPKSdxpSkc7RZOZjG5U/hQgeUk7ip2bsFT+9qjcOhA51n/AILpZhcQuYKefPpRt1iTHL86TokBid4qeFxp0Vj6VVNoVDi1KnsaYWeh2NKbN5gQGpmMUCBOhFVCT4ykZHjuE+FdzD5WpwcUl1AxImBn9Y19jv70ZxbBi7bIjWJFZCwzKSswRW3Shw+ERwIIyjlXPhLCqGyLPPTagDjWJzGCeekT9KHu2bjPCklTqDPI/uKQqGb4oDRI7AVHB4EM2ZhLSNO1X4ThyoCSYbTU/vSjcLYBKwdzoPTelQWeYzCKQwA2WfprXuAwmZgIplZslzdYDyhWA9//AFVnh21IDdtPpVUKxPx3hwBHtP1o9eBg6xvRviSz5NtjP1pzw5wUXT9wKTGtmF/s5V+EpHzm4Ae4On5Vw4SGDZRqvzKN4/iX+VPLVkXCs6G1cf3Bctp9alhSBfRtgWIP40mCMm13EYfzW3Yofce45UNivFBeVvWEfuCVP61qePzhr5GWbVzzAHYHmPSgm4Phb5kgox5qYHbtTsOmVucU0VbaC2gObKCTLRGYk84rd+COPAsJmREjlSPE+CGXVLkr/iGv4VXw6y9i4EIg9RQ2FDvxDw1beJcJ8jEOg/hD+bL7EkUJhrR5cjWm49aV0s3gAGZCrAdUMT7gj6UssIAaiT2NKivEWMy60ue0BT3EvpApdetb0lITFjtIoNnMx0pg+HMwBUGwsCTVWNCLiU0CjmmfELRIpeUoY09nmc11dXUUaWOsLfLT+VGMwCsp3ETUbVpS4IEGaqxzFmzjn5WHpQ1ZgQuXIg8qIw7KwOu2vtVVmwCDJ/8AYrrRCzpyqHH9AiTW5kGqcikFSdRsa9fOYK1cUUwdjzpIKCsNdzqFnzCjQSNGG3Ok6W8rAg0wTElhr6VSChtYjNln0rL+IsHkuyBoT+dOWcyp2ijeJ4MXUDcwJqkyvgh8OcIW67PdJFm2ua4Ru3JUX/Ex+gBNMMSWd2dbaKp2VBCqBoAPYDXnU8VihYw9u0N3m48DcyUQewU/7qjhrqMuh9aaEwPEOY8wj1onCQstI0ED1aoOgZ5CnKOuo9DRGRQFVdCTMdzVkmg4Zh4wzMfvAn86h4bs5bKyNwD+FMHTLhyBsFOntQiFkRAFOUKon2oE2eeIU/unPbX2qfCXm2s9vyqOOfPafUbHQ+lB8Fu+QaaQo/Ck0NMswCgYm8n8QBHvv+VC4zyOkcnGvvV7v/5iPEBlKnv0/KhuJPLgDkw/Oih2NfFeGD2VcgeUgmeh0M1isbbbDhXUFrRME80boe3Q19HxaB7DKRIKR+FYvheICNkuDNbcZXB2nke1D0gixf8A267gBD79KfYdkuC2fvqCrKRq3Q9zSvi3DTaYZB5Pukfke9EcLxRVSNRUt0yrGvEsQoyJ/CuvTMxlgPTQe1DKkmRSu67FpphgrxjWspdAjiJqkvpRV/WhXSkFF2GAJ+tdiEBgDWgzcI2qWcyDTTAA4phPKSBWZuLBr6A0Ou09aTYrg+bUCtE0GzK11P8A+xwN5rqdl7DLiERA9D1qvyiZ2b9mmd2xsRsPpXrYPPygdeVIzoRraIaOpjsZGhqF1SDlbQim78Nf5cpPMEbiKjiOFuwViDPM85obH5KeGhRcQMJQyD7iq7KKzMk6gka/hTC3gCN6lesWwQw+tRoPLFVzDMv117VbhQRoabiyp1XUHlXq4IE9NKLKoFXEAA5hpyqeCxjspGoG1Su4QAa6ivLawAqjekhtaBPEq5XtiZ/ul9pZo/CD71Xh4VYDAE7+9WcetFrzqNlyp/tUD8waGIA0IjTQ1rEzZdhHIkDWTvyijMOJcDoedA4EHU9Pwo/CN5w3tVWI0/F7mXDMf8B/KquA40XsMv8AEFAYHnAAqziKh8OF6kA0ow2FbDOCp8vMdjvTIYwu4JgCUhlIMjbT+dCcJTyQOo/KnLkg6HysCR2NA8ISVYSJ/wDf8qbBFHG1IVXA1SG07b0BdcG6sbEgj3pzj2lYbuDWdwqkOg3iI9BSsZtMFJSKyOOwhS40rpJ9wdf36VtMC0fhQHFcEW2GuscvahuxIB4NeV0Nq9qpGUnn/hYdxQ13g5tuUPLY/wAQOxFQt4Jh5l+dTqs69wafLiBctgkee3+K8/pv9azlw1jt7EV/AwdqsTAGJFNndW1AFdbuzyrCzXwJbmFNRv4Qx3p4U1BIoq9hVKkjSiw8GPvYGFmo2cKWArSLbDAzy0quxYBkRoKpB5EmQrtXqXSNxT37KpIEAVVjMAFBMfvrT6KqFUoeVdXZRXlKyi/E4dQwWInedoPMGpytswTInQrqDT9uLysfDlB91kWDPeaWqSUAyKigkjONp9NxTsVItNuArqSTz02n86FvXk1DGBzjnNH3LjMiDKxQR8mx996XPw5maFEHeG5iiwo69ZtZv7t5lSROxgbdjUMAiHTICD17c+1FtwpkSQBP61Wq3E8yWwR94evL+tKx0Rx1wgeREAEVBLueAyAP6UwsMhAz2nBG7KAQfWelXFEVWuo+Yx8pWGPSKTGhc9pD5cpDdeX9KKXh1u22d9kGf1gSB9YqXDmW62RldDuWIjQ8hQHi3C5M/wDeEpBCzqdBt+FEdsJcMzxjFKzF0WCxJYdzqTQheQnXpry71UqZwCpkjccxVtmR23AH510o52TwbaaiCZ96YoQKFtgD9BVrtsaBGowbi5ZI+8K9vWMywR0pXwa8AelaD4wAzaR+dOyGQxQCBQR939KC4WpV3Xpr9ZP61XdxRdxp6Cuwd7++frEflQCLMdcnQ70iwLzdUT1pnj367cqRYe5luqe9Sxm3wGK1Ctyo7F3AoLHlrFIMBdzXSRpFOs4aQfT8KBi+4c4zqsN96OY5H1qjC4oB1IBgzPfkQaOsW9yCaUl5MzMHXSPyptaBOhk+GyMVjQ6qex1H77V1m6qyCKISbiK3NND3G4/WoXbKkCSJrjkqdHXF2rI/FBirkGkTQ4wgOzAV1vhxJMvEChFHXVCmNprxyF1Brx8Izj5tuh/cVRc4c38VOxHtnzMG5UxxlyVy9R0ocYVsqhYJ39h1ofH3nAAC7U7Cjz7AldU04bdIkx9RXUrEeNbgwzOumwAIUz06b1XdcKD5yZ01Eg9gpiParbFy2wb4yNoZUp0JJg9fwqm46RIW5EjRu+0TNVsRZhb8+UwZ1GUkD3B+U0fZRdSUMAakttOg1pQ+CH3HIXTK0x7HTT3qjE4K4Fyl8y5hmAJbUbHs1HQ4O8QzKRkzFSQD5hpPPXkKq+1OJ8gI5FdQfYazS6xca2pHxH6rnQkd9RmooYvMR51B65o19DtSoLLr+MECAFnuY942qaWxkHMQYgyPqNqW30gFg+VuYWCGO2hByhuxFUree0gZ2VgzECIB0AM5QeU0UFjMYoMAVYLJgqx6d6C4jxEWVZnRXYqyqrCVEjUkelWBs6j5XB2MEfs0m4qyJo6u5OiookDuTVQS9bFNuhBbtqXzZCg5hCY/5E1J7oLc9Ca9biAIIKgKCYUHzH1qyxbUrm1MnY7r6/zrqo52yVm5rFH2Bm0ag7F5V9avsXxrrSEHYO0VfTaj8TieQ2/Wl1vGDTUTRTuuhJpAEYJYbMd6Wvicl143M1cOIKZjcVn8ZeZnLCI5a6mnYh3iLg0BOwk0sdgWRkOb0pfjuIMEZ1IBA1n0iKSW+JyAQsMNxyPeBSGfTOHMqpmYxGpql/EyBoUTWHu8ccqV1iNCZnuO9UYPiiKdQSTzqWOj6nh+IeYEbNEe/KjMRh0eSsBufQ1i+HcTRklmAyGRJ37UstcauPfhHIGaT3PT0p2Jo+i8PkFk2P8AL9mp4fhoztncnNt2PalPBsefiwxnbfY6Qfem32q2lwEuykSYykhjyKnmK58nTox/+SxeH5SUBlBuOc9astYE8tqCwuIdict2SdfMInnsaknEtG/vFJE6CR+FSaf9DUwTJOVxJ0IOulU5svNWkQTO1BJimyhjJEwf6ilt602csNtZHUdKVBY/w1q4DJZAIMQ0yK8xN2VyG2ZJ3BH4VnM6zAZskTB0ZT27UN9qusylHY5TInpTCze2rGglX+orqyTcdund/wDjXVIWHXFVwIBUjSoY/DN8pIBPMb0VbxSsAQBrsa4iW11q9oNMot4ZSuUtDDeRv3r1rbLDAqT0In3B61K5d3zawYHWqrmHVcsE6zQJolhsIM0vmBI8sHy1RjGuIpQFozTmmR025GOfaiCzASrhh35V1zFK3lup9KaZLQofDoqhspImSRIza855VclrP5y6wQQJUeU9j170dicMhQIuxGs6z60Jh+HFFOU6TIA2qnsSJYYskEOIG2u3KYqviVv4lwLbdJYQpIOrkaCQoiTz7161i4B5LfxSJLeUZljtzFSs38pVzahgQw8oiR1GnOpWmPpgeI8PfyuqiQZOvMaHf2oFcXeViXBk65uYj05VvMQi5pLZs5JYFcsTqdRpSnFYdQ+XymOg6iRW8cmjJxFVvEEyIRmgRJIPbbnUDxDKYe24j3pnewCOR5NY5HpXjYRVEMG9jtR6QvIAeKICPnE67VY3Es58ise58te3sI8ZkdT6qNPXahbti/HlKA9Np9zTtB5DWfykkx+Apbb4wiNlyyIjTagr3D77nzk+50orh3Dip8wBEQY3otE0DY698QwgIXWR1oQYQcm16UzfDlScqNHXl9aXPhXJliB6UAD3gynLmNVqx3q42Dm1n1POikwhjcelFoKCMJdQjXQ+kj8NqNOHDQ6aMOhEH3pdh7cHUaUZZwuV5R8s/T3FSPo+wGLIdFGZWZlUz67/ANaf8RsPbeDcIjYT5YYbjkKxVvFQVBOqnl+PpW0UveRQ6kSogjcgajU7RUTo0hZXhL9zpnE9M0+gGtHqpJLIArAebnppuKVWNfKxK5ToXTIY55WXeiGxpQ/OMrfwawRsYb9ayNUPmxashU5dNTp5pGkmla8SAAysHEkfLEEcjzoYu4nPlIaST5GInmD80UVjsUjEOi2suhKCSIGmuX5SYoHZK9i7DHzqQxIGgkCesDTWmSpkEgIFGzGCfpWaxmJZyXWEUCJRiZE6ZgSdarwtwq+YPqQAYyJMcjoQTQCZpszf/qn+0fyrqUf9wXhoEYgbec/otdSodoJsbe9ENzrq6tTMV4tjnXX71Oruy+ldXUmAvw3P1q9/nb0rq6kM9w/z+1G2/m+ldXUMRQzHPvRD/L7iurqljQnxIj4caSpnv52pLxT/AOQ+i/k1dXVceksjb2q65tXV1N9BA8UBlHm0rq6gTIv8o9KqTeurqaJYbh96ExSDPsK6upksX3PmFX21HTl+tdXUIZEDzVdiflNdXUAinDoPi7D9gVvEc5E1O36V1dUSLiA8Q396psaqZ11G+vWurqgthGCc9T9a9vqJmNdda6uoGhbxDY+1e4Y+QetdXUwCFuHqfrXV1dSA/9k="
      channel="Neeti D Xebec"
      verified
      subs="100M"
      noOfVideos={500}
      description="Want to learn the secret of D clan then subscribe"
      />
      <hr />
      <VideoRow
      views="6M"
      subs="100M"
      description="blackbeard's secret about multiple devil fruits"
      timestamp="2 months ago"
      channel="Neeti D Xebec"
      title="Blackbeard's secret"
      image="data:image/jpeg;base64,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"
      />
      <VideoRow
      views="20M"
      subs="100M"
      description="discussion of zoro's conquerer's haki"
      timestamp="3 days ago"
      channel="Neeti D Xebec"
      title="Zoro has conqurer's haki?"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRU89MUnwJtWTVN32z28gH8A7_oJ5Sbw9C1Q&usqp=CAU"
      />
      <VideoRow
      views="18M"
      subs="100M"
      description="Shanks has the one piece theory"
      timestamp="2 weeks ago"
      channel="Neeti D Xebec"
      title="Shanks has the one piece???"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYZ--sP1VWomguPZAQnIn9qD5ybmZQwmg0Q&usqp=CAU"
      />
    </div>
  );
}

export default SearchPage;
