;
(function(window) {
    var svgSprite = '<svg>' +
        '' +
        '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M629.376 160 330.624 467.968 330.624 467.968 288 512 330.624 555.968 330.688 555.968 629.376 863.936 672 819.968 373.312 512 672 204.032Z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M527.470992 137.825019c-195.261158 0-353.551781 158.283979-353.551781 353.536942S332.209835 844.898903 527.470992 844.898903s353.551781-158.283979 353.551781-353.536942S722.73215 137.825019 527.470992 137.825019zM685.136349 616.529705c8.976819 8.969279 8.976819 23.52581 0 32.495088-4.488409 4.488221-10.36448 6.732331-16.247714 6.732331-5.883234 0-11.759305-2.24411-16.248738-6.732331L527.466899 523.858072 402.294924 649.024793c-4.488409 4.488221-10.36448 6.732331-16.247714 6.732331-5.883234 0-11.759305-2.24411-16.247714-6.732331-8.976819-8.969279-8.976819-23.52581 0-32.495088l125.171975-125.166721L369.798472 366.19524c-8.976819-8.969279-8.976819-23.52581 0-32.495088 8.976819-8.976442 23.519634-8.976442 32.496452 0l125.172998 125.167744L652.639897 333.700151c8.976819-8.976442 23.519634-8.976442 32.496452 0 8.976819 8.969279 8.976819 23.52581 0 32.495088L559.964375 491.362984 685.136349 616.529705z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M510.425643 860.642468 184.060551 535.283286c-4.145413-3.862981-109.671819-103.912651-109.671819-221.193775 0-141.872195 83.97046-226.568179 224.629014-226.568179 92.647073 0 180.303482 86.383416 211.407897 120.627335 31.104415-34.243919 118.761847-120.627335 211.407897-120.627335 140.65753 0 224.64334 84.695984 224.64334 226.568179 0 117.2801-105.541755 217.32977-110.042255 221.533512L510.425643 860.642468zM299.017746 117.840872c-72.571852 0-194.309474 25.493627-194.309474 196.248639 0 104.001679 99.412151 198.453864 100.419084 199.401446l305.298288 304.33638 304.957527-304.010969c1.347694-1.272993 100.775194-95.725178 100.775194-199.726857 0-170.756035-121.751948-196.248639-194.324824-196.248639-98.804307 0-198.630896 121.737622-199.63783 122.966613l-11.753695 14.507412-11.786441-14.507412C497.648642 239.578494 397.615345 117.840872 299.017746 117.840872z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M676.56 610.736l-35.04 0-7.232-7.2C677.648 553.12 704 487.696 704 416c0-159.056-128.944-288-288-288S128 256.944 128 416s128.944 288 288 288c71.696 0 137.136-26.368 187.552-69.712l7.184 7.216 0 35.072L830.16 896 896 830.16 676.56 610.736zM416 672c-141.392 0-256-114.608-256-256s114.608-256 256-256 256 114.608 256 256S557.392 672 416 672z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-icon29" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M489.438145 264.87974l0 340.698542 45.124733 0 0-343.422583 50.693566 50.685379 31.843242-31.809473-102.294804-102.520955-106.048291 97.163947 29.698392 33.830503L489.438145 264.87974zM723.93183 365.385804 609.592712 365.385804l0 45.201481 90.084715 0c30.565133 0 29.986965 2.432399 29.986965 29.959336l0 330.067414c0 19.946284 0.6191 29.91431-29.986965 29.91431L324.281641 800.528346c-34.689057 0-29.079292-12.734022-30.02892-29.91431l0-330.067414c0-27.484981-0.536212-29.959336 30.02892-29.959336l90.125647 0 0-45.201481L300.110125 365.385804c-30.565133 0-50.858318 17.507746-50.858318 45.033659l0 385.244085c0 27.575032 24.74866 49.825802 55.313793 49.825802l414.870846 0c30.523177 0 55.31277-22.25077 55.31277-49.825802l0-373.662305C774.749216 394.517285 754.455008 365.385804 723.93183 365.385804z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-mine" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M829.750389 198.198038c-87.540775-87.564311-193.476503-131.326001-317.302693-131.326001-123.827213 0-229.523487 43.76169-317.178873 131.320884C107.583762 285.86468 63.822073 391.669424 63.822073 515.496637c0.10847 114.161063 37.257555 212.958206 111.605867 296.257377l0.611937 0.845251c0.11461 0 0.240477 0 0.240477 0.125867 6.03546 6.64842 12.32777 13.421684 18.987447 19.966751 87.546915 87.649246 193.35166 131.429355 317.178873 131.429355 123.958196 0 229.761917-43.779086 317.302693-131.429355 6.64842-6.545066 12.94073-13.192464 18.978237-19.966751l0.125867-0.125867c0.25685-0.234337 0.3776-0.467651 0.610914-0.593518l0.234337-0.251733c74.263377-83.299171 111.37767-182.096315 111.37767-296.257377C961.071274 391.669424 917.417031 285.86468 829.750389 198.198038L829.750389 198.198038 829.750389 198.198038zM808.470737 219.724307l-0.125867 0c81.630159 81.613786 122.499985 180.175569 122.499985 295.77233 0.125867 99.889011-30.352285 187.200566-91.410919 261.674745-13.546527-18.99461-29.037337-37.240159-46.436612-54.653761l0-0.122797c-77.389578-77.389578-170.990373-116.083855-280.44218-116.083855-109.541859 0-203.016787 38.694277-280.406364 116.083855l-0.12689 0.122797c-17.410532 17.414625-32.882921 35.660174-46.310745 54.653761-61.195757-74.474179-91.766007-161.786757-91.657536-261.674745 0-115.595738 40.86471-214.158545 122.495892-295.77233 81.738629-81.757049 180.295296-122.620735 295.897174-122.620735S726.718805 137.967258 808.470737 219.724307L808.470737 219.724307 808.470737 219.724307zM253.435595 743.79932c71.456449-71.459518 157.917636-107.258862 259.119549-107.258862 101.099582 0 187.435926 35.799344 259.034615 107.258862l0.125867 0c17.902742 18.009166 33.610492 36.882002 47.158043 56.842613-3.504824 3.619434-7.008624 7.134491-10.528797 10.752902-81.734536 81.630159-180.295296 122.494868-295.897174 122.494868-115.595738 0-214.153428-40.86471-295.891034-122.494868-3.504824-3.618411-7.013741-7.133468-10.283204-10.752902C219.698213 780.681322 235.424382 761.812579 253.435595 743.79932L253.435595 743.79932 253.435595 743.79932zM635.307885 280.308127c-33.981952-33.260521-74.978668-49.815569-123.094526-49.815569-48.004317 0-89.12383 16.554024-122.988102 49.815569-34.216289 33.251312-51.14689 73.383334-51.14689 120.431883 0 47.163159 16.930601 87.187735 51.14689 120.56389 33.863249 33.116235 74.982762 49.703005 122.988102 49.703005 48.116881 0 89.112574-16.58677 123.094526-49.703005 34.216289-33.376155 51.271734-73.40073 51.271734-120.56389C686.579619 353.691461 669.523151 313.559439 635.307885 280.308127L635.307885 280.308127 635.307885 280.308127zM512.213359 260.72c39.902802 0 73.868381 13.660114 101.938694 41.229007 28.037567 27.334555 42.075281 60.225663 42.075281 98.792027 0 38.696324-14.037714 71.588455-42.075281 98.905614-28.071336 27.459399-62.035892 41.11849-101.938694 41.11849-39.786145 0-73.753771-13.659091-101.958136-41.11849-27.910677-27.317159-41.944298-60.208267-41.944298-98.905614 0-38.566364 14.032598-71.456449 41.944298-98.792027C438.459588 274.381138 472.427214 260.72 512.213359 260.72L512.213359 260.72 512.213359 260.72zM512.213359 260.72"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-detail" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M512 414.72c-15.36 0-30.72 12.8-30.72 30.72l0 268.8c0 15.36 12.8 30.72 30.72 30.72 15.36 0 30.72-12.8 30.72-30.72L542.72 445.44C542.72 427.52 527.36 414.72 512 414.72L512 414.72zM512 64C263.68 64 64 263.68 64 512c0 248.32 199.68 448 448 448 248.32 0 448-199.68 448-448C960 263.68 760.32 64 512 64L512 64zM512 901.12c-215.04 0-389.12-174.08-389.12-389.12 0-215.04 174.08-389.12 389.12-389.12 215.04 0 389.12 174.08 389.12 389.12C901.12 727.04 727.04 901.12 512 901.12L512 901.12zM512 281.6c-20.48 0-38.4 17.92-38.4 38.4 0 20.48 17.92 38.4 38.4 38.4 20.48 0 38.4-17.92 38.4-38.4C550.4 296.96 532.48 281.6 512 281.6L512 281.6zM512 281.6"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-iconfonticonfontunie0471" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M178 971.327c-32.871 0-60.159-11.31-83.425-34.574C71.31 913.488 60 886.199 60 853.328L60 170.672c0-32.871 11.31-60.159 34.575-83.425C117.841 63.982 145.129 52.673 178 52.673l682.656 0c32.871 0 60.158 11.31 83.424 34.575 23.266 23.266 34.575 50.555 34.575 83.425l0 682.656c0 32.87-11.31 60.158-34.575 83.425-23.266 23.265-50.554 34.574-83.424 34.574L178 971.328zM178.032 118.015c-14.47 0-27.001 5.195-37.248 15.441-10.246 10.246-15.441 22.778-15.441 37.248L125.343 853.36c0 14.47 5.195 27.002 15.441 37.248 10.247 10.246 22.778 15.441 37.248 15.441l682.656 0c14.47 0 27.001-5.195 37.248-15.44 10.246-10.248 15.441-22.779 15.441-37.249L913.377 170.704c0-14.469-5.195-27.001-15.441-37.248-10.246-10.247-22.778-15.441-37.248-15.441L178.032 118.015zM519.344 715.423c-9.098 0-16.656-3.134-23.104-9.582-6.448-6.449-9.583-14.007-9.583-23.104L486.657 544.736l-138 0c-9.098 0-16.656-3.135-23.104-9.583-6.449-6.448-9.583-14.006-9.583-23.104s3.135-16.656 9.583-23.104c6.448-6.449 14.006-9.583 23.104-9.583l138 0 0-138c0-9.098 3.135-16.656 9.583-23.104 6.449-6.449 14.006-9.583 23.104-9.583 9.099 0 16.656 3.135 23.104 9.583 6.449 6.449 9.584 14.006 9.584 23.104l0 138 138.001 0c9.099 0 16.656 3.135 23.104 9.583 6.448 6.448 9.582 14.005 9.582 23.104s-3.134 16.656-9.582 23.104c-6.449 6.448-14.007 9.583-23.104 9.583L552.031 544.736l0 138.001c0 9.099-3.135 16.655-9.583 23.104C536 712.289 528.442 715.423 519.344 715.423z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-syspot" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M767.36248 438.592107c-36.522822 0-66.137303 29.613458-66.137303 66.137303 0 36.523845 29.613458 66.138326 66.137303 66.138326 36.524868 0 66.138326-29.613458 66.138326-66.138326C833.500806 468.205565 803.888372 438.592107 767.36248 438.592107zM513.836323 438.592107c-36.524868 0-66.138326 29.613458-66.138326 66.137303 0 36.523845 29.613458 66.138326 66.138326 66.138326 36.521798 0 66.137303-29.613458 66.137303-66.138326C579.973626 468.205565 550.359145 438.592107 513.836323 438.592107zM271.332197 438.592107c-36.524868 0-66.138326 29.613458-66.138326 66.137303 0 36.523845 29.613458 66.138326 66.138326 66.138326 36.522822 0 66.137303-29.613458 66.137303-66.138326C337.4695 468.205565 307.855018 438.592107 271.332197 438.592107z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-list" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M923.174559 49.378403 768.583235 49.378403c7.273701 15.439498 11.702966 32.542362 11.702966 50.838379 0 5.920455-0.874979 11.601272-1.6976 17.285109l77.74322 0c31.730817 0 57.454588 25.946291 57.454588 57.948966l0 724.360561c0 32.003681-25.722764 57.948966-57.454588 57.948966L166.888853 957.760384c-31.730817 0-57.451567-25.946291-57.451567-57.948966L109.437286 175.450857c0-32.003681 25.719743-57.948966 57.451567-57.948966l111.119279 0c-0.822621-5.683838-1.6976-11.363648-1.6976-17.285109 0-18.296017 4.429265-35.397874 11.702966-50.838379L100.82242 49.378403c-31.99764 0-57.934869 25.937229-57.934869 57.934869l0 858.746824c0 31.994619 25.937229 57.931849 57.934869 57.931849L923.174559 1023.991945c31.99764 0 57.93789-25.937229 57.93789-57.931849L981.112449 107.313272C981.112449 75.315632 955.172199 49.378403 923.174559 49.378403zM763.071574 369.547118 260.050427 369.547118c-22.40006 0-40.563168 17.96274-40.563168 40.126183s18.163109 40.126183 40.563168 40.126183l503.020141 0c22.406101 0 40.566189-17.96274 40.566189-40.126183S785.477675 369.547118 763.071574 369.547118zM763.071574 562.14917 260.050427 562.14917c-22.40006 0-40.563168 17.96576-40.563168 40.123162 0 22.163443 18.163109 40.126183 40.563168 40.126183l503.020141 0c22.406101 0 40.566189-17.96274 40.566189-40.126183C803.636756 580.11493 785.477675 562.14917 763.071574 562.14917zM763.071574 754.751221 260.050427 754.751221c-22.40006 0-40.563168 17.96274-40.563168 40.126183 0 22.157402 18.163109 40.126183 40.563168 40.126183l503.020141 0c22.406101 0 40.566189-17.968781 40.566189-40.126183C803.636756 772.713961 785.477675 754.751221 763.071574 754.751221zM414.203758 176.945067l194.716499 0c44.810188 0 81.132378-35.9285 81.132378-80.254379 0-44.319838-36.32219-80.245317-81.132378-80.245317L414.203758 16.445371c-44.807168 0-81.132378 35.925479-81.132378 80.245317C333.072386 141.016567 369.397597 176.945067 414.203758 176.945067z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-yanjing" viewBox="0 0 1056 1024">' +
        '' +
        '<path d="M472.336446 341.023128c-189.58922 0-344.071702 175.517643-344.071702 175.517643s154.482482 182.577499 344.071702 182.577499c196.63303 0 351.115512-182.577499 351.115512-182.577499S668.953432 341.023128 472.336446 341.023128L472.336446 341.023128zM563.617173 607.837543c-28.078972 21.067252-56.190034 35.122783-91.280727 35.122783-35.106738 0-63.18571-14.071576-84.252961-35.122783-21.083297-28.078972-35.122783-56.190034-35.122783-91.280727s14.039486-63.18571 35.122783-84.252961c21.067252-21.067252 56.157944-35.106738 84.252961-35.106738 35.106738 0 63.201755 14.039486 84.269007 35.106738 28.078972 21.067252 42.134503 56.173989 42.134503 84.252961C598.723911 551.647509 584.66838 579.758571 563.617173 607.837543L563.617173 607.837543zM563.617173 607.837543"  ></path>' +
        '' +
        '<path d="M471.181197 470.459166c34.513068 0 60.393858 25.88079 60.393858 60.409903 0 25.864745-25.864745 51.745534-60.393858 51.745534-25.88079 0-51.761579-25.864745-51.761579-51.745534C419.435663 496.356001 445.300407 470.459166 471.181197 470.459166"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-image" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M901.910999 81.679261 122.089001 81.679261C53.306465 81.679261 0 134.985726 0 203.768262l0 616.463476c0 67.922754 53.306465 122.089001 122.089001 122.089001l779.821998 0c67.922754 0 122.089001-53.306465 122.089001-122.089001L1024 203.768262C1024 134.985726 969.833753 81.679261 901.910999 81.679261zM122.089001 130.686818l779.821998 0c41.269521 0 73.081444 31.811923 73.081444 73.081444l0 375.724601c-31.811923-14.616289-66.203191-22.354324-99.734677-22.354324-85.118388 0-163.358522 43.848866-209.786734 114.350966-78.240134-104.893367-202.048699-175.395466-343.912678-175.395466-102.314022 0-197.74979 34.391268-275.130143 99.734677L46.428212 203.768262C49.007557 162.498741 82.539043 130.686818 122.089001 130.686818zM49.007557 817.652393 49.007557 656.873216 51.586902 659.452561c70.502099-73.081444 168.517212-114.350966 270.831234-114.350966 197.74979 0 361.108312 153.900924 375.724601 346.492024L119.509656 891.593619C82.539043 890.733837 49.007557 858.921914 49.007557 817.652393zM901.910999 890.733837 748.010076 890.733837c-5.15869-63.623846-22.354324-122.089001-51.586902-172.816121 34.391268-67.922754 102.314022-111.77162 177.974811-111.77162 34.391268 0 67.922754 9.457599 99.734677 26.653233l0 184.853065C974.992443 858.921914 943.180521 890.733837 901.910999 890.733837zM750.589421 432.470193c55.88581 0 102.314022-46.428212 102.314022-102.314022s-46.428212-102.314022-102.314022-102.314022c-55.88581 0-102.314022 46.428212-102.314022 102.314022S694.70361 432.470193 750.589421 432.470193zM750.589421 276.849706c29.232578 0 53.306465 24.073887 53.306465 53.306465 0 29.232578-24.073887 53.306465-53.306465 53.306465-29.232578 0-53.306465-24.073887-53.306465-53.306465C697.282955 300.923594 721.356843 276.849706 750.589421 276.849706z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-heart1" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M890 201Q820 129 720.5 129 621 129 550 201L512 240 474 201Q403 129 304 129 204 129 134 201 65 271 64.5 368.5 64 466 132 545 156 572 444 866 472 895 512 895 552 895 580 866 868 573 892 545 960 466 959.5 368.5 959 271 890 201z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-msg" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8C976 236.8 768 57.6 512 57.6S48 236.8 48 464c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8 32 41.6 51.2 64 73.6 64s41.6-22.4 76.8-64m35.2-102.4c-19.2 3.2-32 19.2-67.2 64C531.2 892.8 512 912 512 912l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352c-3.2 176-124.8 313.6-310.4 345.6z"  ></path>' +
        '' +
        '<path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0zM467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0zM652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '</svg>'
    var script = function() {
        var scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }()
    var shouldInjectCss = script.getAttribute("data-injectcss")

    /**
     * document ready
     */
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false)
                    fn()
                }
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                // only fire once
                init = function() {
                    if (!done) {
                        done = true
                        fn()
                    }
                }
                // polling for no errors
            var polling = function() {
                try {
                    // throws errors until after ondocumentready
                    d.documentElement.doScroll('left')
                } catch (e) {
                    setTimeout(polling, 50)
                    return
                }
                // no errors, fire

                init()
            };

            polling()
                // trying to always fire before onload
            d.onreadystatechange = function() {
                if (d.readyState == 'complete') {
                    d.onreadystatechange = null
                    init()
                }
            }
        }
    }

    /**
     * Insert el before target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var before = function(el, target) {
        target.parentNode.insertBefore(el, target)
    }

    /**
     * Prepend el to target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var prepend = function(el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }

    function appendSvg() {
        var div, svg

        div = document.createElement('div')
        div.innerHTML = svgSprite
        svgSprite = null
        svg = div.getElementsByTagName('svg')[0]
        if (svg) {
            svg.setAttribute('aria-hidden', 'true')
            svg.style.position = 'absolute'
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = 'hidden'
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e)
        }
    }

    ready(appendSvg)


})(window)