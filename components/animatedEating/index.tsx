import React, { useEffect, useState } from 'react'
import Svg, { Path, G, LinearGradient, Stop, Rect, Defs, ClipPath } from 'react-native-svg'
import { Animated, Text, View, StyleSheet, Button } from 'react-native'

const EatingImage = (props) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0.1))

  useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true, // TODO ?
      }).start()
	  }, [])

  return (
    <Svg width="300vw" height="300vh" viewBox="0 0 904 658" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G id="customEating" clip-path="url(#clip0)">
          {/* <Path id="background" d="M532.89 18.43C464.41 44.88 390.18 46.11 321.23 21.21C223.51 -14.07 95.89 -23.1 48.6 138.57C-32.11 414.78 133.01 513.37 133.01 513.37C133.01 513.37 248.29 539.21 312.12 585.9C402.79 652.22 513.83 674.39 618.43 643.29C685.32 623.4 742.65 590.77 759.04 537.38C804.88 388.06 775.78 298.31 858.74 258.94C941.7 219.57 895.54 73.72 836.54 70.41C777.54 67.1 638.54 100.93 595.54 33.64C580.21 9.75002 556.76 9.20001 532.89 18.43Z" fill="url(#paint0_linear)"/> */}
          {/* <Animated.View
            style={{
                opacity: fadeAnim, // Bind opacity to animated value
              }}> */}
        <G id="chopsticksGirl" rotation="-1" origin="1, 1">
          <Path id="Vector" d="M379.15 299.79L323.42 292.57C321.16 292.28 319.42 291.42 319.48 290.67C319.58 289.92 321.48 289.57 323.79 289.9L379.4 297.95C380.93 298.17 382.09 298.75 382.02 299.26C381.95 299.74 380.67 299.99 379.15 299.79Z" fill="#FFE8D6"/>
          <Path id="Vector_2" d="M379.5 300.74L323.6 294.96C321.33 294.73 319.4 295.15 319.33 295.9C319.26 296.65 321.07 297.44 323.33 297.64L379.33 302.64C380.87 302.78 382.13 302.48 382.18 301.97C382.22 301.43 381.03 300.9 379.5 300.74Z" fill="#FFE8D6"/>
        </G>
        {/* </Animated.View> */}
        <G id="chopstick-guy">
          <Path id="Vector_3" d="M463.36 342.79L519.08 335.57C521.34 335.28 523.08 334.42 523.02 333.67C522.92 332.92 521.02 332.57 518.71 332.9L463.1 340.95C461.57 341.17 460.41 341.75 460.48 342.26C460.55 342.74 461.83 342.99 463.36 342.79Z" fill="#FFE8D6"/>
          <Path id="Vector_4" d="M463 343.74L518.9 337.96C521.17 337.73 523.1 338.15 523.17 338.9C523.24 339.65 521.43 340.44 519.17 340.64L463.17 345.64C461.63 345.78 460.37 345.48 460.32 344.97C460.28 344.43 461.47 343.9 463 343.74Z" fill="#FFE8D6"/>
        </G>
        <G id="table">
          <Path id="Vector_5" d="M279.03 402.64H265.44V597.5H279.03V402.64Z" fill="#40414D"/>
          <Path id="Vector_6" d="M575.85 402.64H562.26V597.5H575.85V402.64Z" fill="#40414D"/>
          <Path id="Vector_7" d="M260.25 386.78H574.25C580.085 386.78 585.681 389.098 589.806 393.224C593.932 397.349 596.25 402.945 596.25 408.78V411.7H238.25V408.78C238.25 402.945 240.568 397.349 244.694 393.224C248.819 389.098 254.415 386.78 260.25 386.78V386.78Z" fill="#DFE6F5"/>
          <Path id="Vector_8" opacity="0.1" d="M259.25 386.78H573.25C579.085 386.78 584.681 389.098 588.806 393.224C592.932 397.349 595.25 402.945 595.25 408.78V411.7H237.25V408.78C237.25 402.945 239.568 397.349 243.694 393.224C247.819 389.098 253.415 386.78 259.25 386.78V386.78Z" fill="black"/>
          <Path id="Vector_9" d="M260.25 382.24H574.25C580.085 382.24 585.681 384.558 589.806 388.684C593.932 392.809 596.25 398.405 596.25 404.24V407.16H238.25V404.24C238.25 398.405 240.568 392.809 244.694 388.684C248.819 384.558 254.415 382.24 260.25 382.24Z" fill="#DFE6F5"/>
          <Path id="Vector_10" d="M569.06 564.64V551.05H274.5V564.64H569.06Z" fill="#40414D"/>
        </G>
        <G id="noodles">
          <Path id="Vector_11" d="M417.25 360.74C429.152 360.74 438.8 351.092 438.8 339.19C438.8 327.288 429.152 317.64 417.25 317.64C405.348 317.64 395.7 327.288 395.7 339.19C395.7 351.092 405.348 360.74 417.25 360.74Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_12" d="M417.25 355.61C426.319 355.61 433.67 348.259 433.67 339.19C433.67 330.121 426.319 322.77 417.25 322.77C408.181 322.77 400.83 330.121 400.83 339.19C400.83 348.259 408.181 355.61 417.25 355.61Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_13" d="M417.25 348.42C422.348 348.42 426.48 344.288 426.48 339.19C426.48 334.092 422.348 329.96 417.25 329.96C412.152 329.96 408.02 334.092 408.02 339.19C408.02 344.288 412.152 348.42 417.25 348.42Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_14" d="M401.39 375.47C413.292 375.47 422.94 365.822 422.94 353.92C422.94 342.018 413.292 332.37 401.39 332.37C389.488 332.37 379.84 342.018 379.84 353.92C379.84 365.822 389.488 375.47 401.39 375.47Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_15" d="M417.25 366.38C432.267 366.38 444.44 354.207 444.44 339.19C444.44 324.173 432.267 312 417.25 312C402.233 312 390.06 324.173 390.06 339.19C390.06 354.207 402.233 366.38 417.25 366.38Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_16" d="M401.39 370.34C410.459 370.34 417.81 362.989 417.81 353.92C417.81 344.851 410.459 337.5 401.39 337.5C392.321 337.5 384.97 344.851 384.97 353.92C384.97 362.989 392.321 370.34 401.39 370.34Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_17" d="M401.39 363.15C406.488 363.15 410.62 359.018 410.62 353.92C410.62 348.822 406.488 344.69 401.39 344.69C396.292 344.69 392.16 348.822 392.16 353.92C392.16 359.018 396.292 363.15 401.39 363.15Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_18" d="M401.39 381.11C416.407 381.11 428.58 368.937 428.58 353.92C428.58 338.903 416.407 326.73 401.39 326.73C386.373 326.73 374.2 338.903 374.2 353.92C374.2 368.937 386.373 381.11 401.39 381.11Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_19" d="M433.11 381.11C448.127 381.11 460.3 368.937 460.3 353.92C460.3 338.903 448.127 326.73 433.11 326.73C418.093 326.73 405.92 338.903 405.92 353.92C405.92 368.937 418.093 381.11 433.11 381.11Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
        </G>
        <G id="noodle-bowl">
          <Path id="Vector_20" d="M433.11 375.47C445.012 375.47 454.66 365.822 454.66 353.92C454.66 342.018 445.012 332.37 433.11 332.37C421.208 332.37 411.56 342.018 411.56 353.92C411.56 365.822 421.208 375.47 433.11 375.47Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_21" d="M433.11 370.34C442.179 370.34 449.53 362.989 449.53 353.92C449.53 344.851 442.179 337.5 433.11 337.5C424.041 337.5 416.69 344.851 416.69 353.92C416.69 362.989 424.041 370.34 433.11 370.34Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_22" d="M433.11 363.15C438.208 363.15 442.34 359.018 442.34 353.92C442.34 348.822 438.208 344.69 433.11 344.69C428.012 344.69 423.88 348.822 423.88 353.92C423.88 359.018 428.012 363.15 433.11 363.15Z" fill="#FFD77C" stroke="#FFAB50" stroke-miterlimit="10"/>
          <Path id="Vector_23" d="M360.6 346H473.89V351.32C473.89 356.573 472.855 361.774 470.845 366.627C468.835 371.48 465.889 375.89 462.174 379.604C458.46 383.319 454.05 386.265 449.197 388.275C444.344 390.285 439.143 391.32 433.89 391.32H400.6C395.347 391.32 390.146 390.285 385.293 388.275C380.44 386.265 376.03 383.319 372.316 379.604C368.601 375.89 365.655 371.48 363.645 366.627C361.635 361.774 360.6 356.573 360.6 351.32V346Z" fill="#FFE8D6"/>
          <Path id="Vector_24" opacity="0.1" d="M463.67 345.99C463.375 357.807 458.474 369.04 450.013 377.294C441.552 385.548 430.2 390.168 418.38 390.17H395.89C399.171 390.919 402.525 391.302 405.89 391.31H428.55C434.503 391.313 440.399 390.142 445.899 387.866C451.4 385.59 456.399 382.252 460.609 378.043C464.819 373.835 468.159 368.838 470.438 363.338C472.717 357.838 473.89 351.943 473.89 345.99H463.67Z" fill="black"/>
        </G>
        <G id="left-chair">
          <Path id="Vector_25" d="M164.06 503.59H152.17V611.77H164.06V503.59Z" fill="#40414D"/>
          <Path id="Vector_26" d="M257.97 503.59H246.08V611.77H257.97V503.59Z" fill="#40414D"/>
          <Path id="Vector_27" d="M267.49 485.76C267.49 492.98 243.01 498.84 212.81 498.84C182.61 498.84 159.32 492.99 159.32 485.76C159.32 478.53 182.61 472.68 212.81 472.68C243.01 472.68 267.49 478.57 267.49 485.76Z" fill="#F6C6CD"/>
          <Path id="Vector_28" d="M142.66 485.75H267.48V496.65C267.48 499.435 266.374 502.105 264.405 504.075C262.436 506.044 259.765 507.15 256.98 507.15H160.66C155.886 507.15 151.308 505.254 147.932 501.878C144.556 498.502 142.66 493.924 142.66 489.15V485.75Z" fill="#40414D"/>
          <Path id="Vector_29" d="M121.463 360.671L124.038 360.089C125.849 359.68 127.749 360.008 129.318 360.999C130.888 361.991 131.999 363.565 132.408 365.376L163.582 503.481L159.68 504.362C156.405 505.102 152.97 504.509 150.131 502.716C147.293 500.923 145.283 498.076 144.543 494.8L116.157 369.044C115.954 368.146 115.931 367.217 116.088 366.309C116.245 365.402 116.579 364.534 117.072 363.756C117.565 362.978 118.207 362.305 118.96 361.776C119.714 361.246 120.564 360.871 121.463 360.671Z" fill="#40414D"/>
        </G>
        <G id="right-chair">
          <Path id="Vector_30" d="M672.43 613.69H684.32V505.51H672.43V613.69Z" fill="#40414D"/>
          <Path id="Vector_31" d="M578.52 613.69H590.41V505.51H578.52V613.69Z" fill="#40414D"/>
          <Path id="Vector_32" d="M569.02 487.68C569.02 494.9 593.5 500.76 623.7 500.76C653.9 500.76 677.19 494.91 677.19 487.68C677.19 480.45 653.89 474.57 623.7 474.57C593.51 474.57 569.02 480.46 569.02 487.68Z" fill="#F6C6CD"/>
          <Path id="Vector_33" d="M675.83 509.08H579.51C576.725 509.08 574.055 507.974 572.085 506.005C570.116 504.036 569.01 501.365 569.01 498.58V487.68H693.83V491.08C693.83 495.854 691.934 500.432 688.558 503.808C685.182 507.184 680.604 509.08 675.83 509.08Z" fill="#40414D"/>
          <Path id="Vector_34" d="M676.827 506.282L672.926 505.401L704.104 367.276C704.513 365.465 705.624 363.891 707.194 362.899C708.763 361.908 710.663 361.58 712.474 361.989L715.049 362.57C716.86 362.979 718.434 364.091 719.426 365.66C720.417 367.23 720.744 369.129 720.336 370.94L691.945 496.715C691.206 499.987 689.199 502.832 686.365 504.626C683.531 506.419 680.1 507.015 676.827 506.282V506.282Z" fill="#40414D"/>
        </G>
        <G id="mans-arm">
        <G id="Group 1">
          <Path id="Vector_35" d="M599.26 360.35C599.26 360.35 566.55 361.23 543.56 343.55C520.57 325.87 494.94 331.17 500.24 341.78C505.54 352.39 532.95 361.23 537.37 362.11C541.79 362.99 605.44 380.68 605.44 380.68L599.26 360.35Z" fill="#F8BDC5"/>
        </G>
        </G>
        <G id="mans-head">
          <Path id="Vector_36" opacity="0.1" d="M634.18 260.01C632.79 253.01 635.64 250.85 636.39 241.89L590.39 268.41C590.39 268.41 595.66 274.15 601.65 281.52C604.327 282.197 607.079 282.533 609.84 282.52C621.89 282.57 628.48 269.63 634.18 260.01Z" fill="black"/>
          <Path id="Vector_37" d="M608.98 281.67C627.045 281.67 641.69 267.025 641.69 248.96C641.69 230.895 627.045 216.25 608.98 216.25C590.915 216.25 576.27 230.895 576.27 248.96C576.27 267.025 590.915 281.67 608.98 281.67Z" fill="#F8BDC5"/>
          <Path id="Vector_38" opacity="0.1" d="M617.23 239.03C612.23 242.21 612.16 249.4 615.38 254.38C618.6 259.36 624.15 262.65 629.49 265.75C631.04 266.65 632.75 267.58 634.49 267.38C635.828 267.119 637.067 266.493 638.07 265.57C641.807 262.654 645.373 259.526 648.75 256.2C653.61 251.42 658.28 245.53 657.52 238.86C656.66 231.29 649.18 225.59 646.16 218.42C643.62 212.42 644.38 205.69 642.16 199.56C639.94 193.43 632.16 187.76 626.34 190.97C624.19 192.15 622.89 194.26 621.09 195.85C616.63 199.79 609.44 200.18 603.34 198.38C597.24 196.58 595.43 189.23 586.92 189.21C591.15 190.7 594.01 195.11 593.36 199.13C589.95 201.06 585.47 199.96 581.36 199.89C577.25 199.82 572.36 202.12 573.07 205.82C573.69 208.82 578.02 211.05 577.38 214.05C569.868 218.007 561.679 220.518 553.24 221.45C551.71 221.62 562.43 230.53 563.65 231.12C568.12 233.26 573.49 234.83 578.22 236.47C591.07 240.9 604.23 242.48 617.23 239.03Z" fill="black"/>
          <Path id="Vector_39" d="M617.23 238.14C612.23 241.32 612.16 248.51 615.38 253.49C618.6 258.47 624.15 261.76 629.49 264.86C631.04 265.76 632.75 266.69 634.49 266.49C635.828 266.229 637.067 265.603 638.07 264.68C641.807 261.764 645.373 258.636 648.75 255.31C653.61 250.53 658.28 244.64 657.52 237.97C656.66 230.4 649.18 224.7 646.16 217.53C643.62 211.53 644.38 204.8 642.16 198.67C639.94 192.54 632.16 186.87 626.34 190.08C624.19 191.26 622.89 193.37 621.09 194.96C616.63 198.9 609.44 199.29 603.34 197.49C597.24 195.69 595.43 188.34 586.92 188.32C591.15 189.81 594.01 194.22 593.36 198.24C589.95 200.17 585.47 199.07 581.36 199C577.25 198.93 572.36 201.23 573.07 204.93C573.69 207.93 578.02 210.16 577.38 213.16C569.868 217.117 561.679 219.628 553.24 220.56C551.71 220.73 562.43 229.64 563.65 230.23C568.12 232.37 573.49 233.94 578.22 235.58C591.07 240.02 604.23 241.57 617.23 238.14Z" fill="#916168"/>
        </G>
        <G id="mans-body">
          <Path id="Vector_40" d="M601.89 561.92C601.89 561.92 604.54 591.09 591.28 594.63C578.02 598.17 590.4 612.31 601 609.63C611.6 606.95 650.51 592.83 653.16 571.63C655.81 550.43 626.64 543.34 626.64 543.34L601.89 561.92Z" fill="#B8616E"/>
          <Path id="Vector_41" opacity="0.05" d="M601.89 561.92C601.89 561.92 604.54 591.09 591.28 594.63C578.02 598.17 590.4 612.31 601 609.63C611.6 606.95 650.51 592.83 653.16 571.63C655.81 550.43 626.64 543.34 626.64 543.34L601.89 561.92Z" fill="black"/>
          <Path id="Vector_42" d="M607.22 562.8C607.22 562.8 609.87 591.97 596.61 595.51C583.35 599.05 595.73 613.19 606.33 610.51C616.93 607.83 655.84 593.71 658.49 572.51C661.14 551.31 631.97 544.22 631.97 544.22L607.22 562.8Z" fill="#B8616E"/>
          <Path id="Vector_43" opacity="0.1" d="M634.62 545.12L609.89 563.69C609.89 563.69 610 564.95 610.07 566.96C619.41 564.4 639.76 557.6 640.07 546.96C638.292 546.238 636.472 545.624 634.62 545.12V545.12Z" fill="black"/>
          <Path id="Vector_44" d="M619.15 290.95H608.54V298.91H619.15V290.95Z" fill="#F8BDC5"/>
          <Path id="Vector_45" d="M608.99 419.57C608.99 419.57 592.14 432.81 578.3 435.95C570.071 437.731 562.094 440.522 554.55 444.26L522.72 460.44C519.829 461.894 517.35 464.05 515.508 466.711C513.667 469.372 512.522 472.452 512.18 475.67C511.27 484.67 514.89 496.51 536.49 503.55L604.56 560.13L625.78 542.45L553.29 486.77L608.99 452.29V419.57Z" fill="#758AC8"/>
          <Path id="Vector_46" opacity="0.1" d="M608.99 419.57C608.99 419.57 592.14 432.81 578.3 435.95C570.071 437.731 562.094 440.522 554.55 444.26L522.72 460.44C519.829 461.894 517.35 464.05 515.508 466.711C513.667 469.372 512.522 472.452 512.18 475.67C511.27 484.67 514.89 496.51 536.49 503.55L604.56 560.13L625.78 542.45L553.29 486.77L608.99 452.29V419.57Z" fill="black"/>
          <Path id="Vector_47" d="M602.8 411.63L592.19 443.46C592.19 443.46 532.52 480.15 527.65 485.01C523.87 488.79 518.81 503.58 536.49 515.95C554.17 528.32 602.79 567.23 602.79 567.23C602.79 567.23 639.92 559.23 637.27 544.23L576.27 500.03C576.27 500.03 602.79 477.03 630.2 480.58C657.61 484.13 662.03 478.81 662.03 478.81C662.03 478.81 683.25 457.57 676.17 437.27C669.09 416.97 602.8 411.63 602.8 411.63Z" fill="#758AC8"/>
          <Path id="Vector_48" d="M589.54 267.57C589.54 267.57 619.6 300.28 617.83 310C616.06 319.72 641.7 281.71 641.7 281.71C641.7 281.71 633.7 262.26 635.51 241.04L589.54 267.57Z" fill="#F8BDC5"/>
          <Path id="Vector_49" opacity="0.1" d="M615.77 297.57C617.821 295.405 619.98 293.346 622.24 291.4C626.763 287.69 630.913 283.547 634.63 279.03C640.82 271.03 663.8 305.55 663.8 305.55C663.8 305.55 677.94 321.46 676.18 359.48C674.42 397.5 678.39 448.33 678.39 448.33L673.04 449.82C668.534 451.324 663.739 451.759 659.036 451.091C654.333 450.422 649.849 448.669 645.94 445.97C638.88 441.09 629.94 435.97 623.14 435.51C609.88 434.63 597.94 427.11 597.94 427.11C597.94 427.11 603.69 413.41 594.85 369.2C586.01 324.99 608.54 293.57 608.54 293.57C608.54 293.57 610.32 303.19 615.77 297.57Z" fill="black"/>
          <Path id="Vector_50" d="M681.48 444.34L676.18 446.11L673.03 447.16C668.524 448.665 663.729 449.1 659.026 448.432C654.322 447.764 649.839 446.01 645.93 443.31C638.88 438.44 629.93 433.31 623.13 432.85C609.89 431.96 594.89 422.24 594.89 422.24C594.89 422.24 603.73 410.75 594.89 366.54C586.05 322.33 608.59 290.95 608.59 290.95C608.59 290.95 610.37 300.52 615.82 294.89C617.866 292.727 620.022 290.671 622.28 288.73C626.803 285.021 630.953 280.877 634.67 276.36C640.86 268.36 663.84 302.88 663.84 302.88C663.84 302.88 677.98 318.79 676.22 356.81C676.03 360.81 675.95 364.93 675.94 369.1C675.81 404.68 681.48 444.34 681.48 444.34Z" fill="#5E52AD"/>
          <Path id="Vector_51" opacity="0.1" d="M631.09 357.7L631.97 377.15C631.97 377.15 585.11 379.8 575.39 370.08C565.67 360.36 601.89 398.67 609.89 401.02C617.4 403.23 636.79 405.18 646.96 405.38C649.865 405.474 652.735 404.721 655.221 403.214C657.706 401.706 659.7 399.509 660.96 396.89C662.145 394.312 662.529 391.438 662.06 388.64C660.29 377.15 662.06 352.39 662.06 352.39L631.09 357.7Z" fill="black"/>
          <Path id="Vector_52" d="M631.09 355.93L631.97 375.38C631.97 375.38 585.11 378.03 575.39 368.31C565.67 358.59 530.5 360.74 531.19 368.31C531.63 373.17 555.06 388.64 569.19 389.53C583.32 390.42 601.89 396.9 609.89 399.25C617.4 401.46 636.79 403.41 646.96 403.61C649.865 403.703 652.735 402.951 655.221 401.444C657.706 399.936 659.7 397.739 660.96 395.12C662.145 392.542 662.529 389.668 662.06 386.87C660.29 375.38 662.06 350.62 662.06 350.62L631.09 355.93Z" fill="#F8BDC5"/>
          <Path id="Vector_53" opacity="0.1" d="M641.7 299.35C641.7 299.35 621.37 302 624.02 332.06C626.67 362.12 630.21 364.77 630.21 364.77C630.21 364.77 660.27 362.12 663.8 361.23C667.33 360.34 665.57 327.64 665.57 327.64C665.57 327.64 664.68 298.47 641.7 299.35Z" fill="black"/>
          <Path id="Vector_54" d="M641.7 298.47C641.7 298.47 621.37 301.12 624.02 331.18C626.67 361.24 630.21 363.89 630.21 363.89C630.21 363.89 660.27 361.24 663.8 360.35C667.33 359.46 665.57 326.76 665.57 326.76C665.57 326.76 664.68 297.57 641.7 298.47Z" fill="#5E52AD"/>
          <Path id="Vector_55" opacity="0.1" d="M656.18 559.46C657.6 562.734 658.094 566.335 657.61 569.87C654.96 591.09 616.06 605.23 605.45 607.87C599.86 609.27 593.77 606 591.22 602.07C592.86 606.69 599.92 611.24 606.34 609.64C616.95 606.99 655.85 592.84 658.5 571.64C659.079 567.436 658.264 563.157 656.18 559.46Z" fill="white"/>
        </G>
        <G id="womans-arm">
          <Path id="Vector_56" d="M264 352.732C264 352.732 272 362.732 277 352.732C282 342.732 293 309.732 293 309.732C293 309.732 320 280.732 329 289.732C338 298.732 307 314.732 307 314.732C307 314.732 296 375.732 286 376.732C276 377.732 261 376.732 261 376.732L256 365.732L264 352.732Z" fill="#F8BDC5"/>
        </G>
        <G id="womans-body">
          <Path id="Vector_57" d="M301.75 558.25C301.75 558.25 289.75 573.25 294.75 579.25C299.75 585.25 324.75 596.72 332.75 596.25C341.25 595.75 369.75 597.25 370.75 584.25C370.75 584.25 372.75 578.25 346.75 577.25C320.75 576.25 328.75 549.25 328.75 549.25L301.75 558.25Z" fill="#594C76"/>
          <Path id="Vector_58" opacity="0.1" d="M158.75 432.25C158.75 432.25 146.75 473.25 182.75 480.25L221.75 478.25C221.75 478.25 276.75 467.25 291.75 475.25C291.75 475.25 297.75 476.25 295.75 484.25C293.75 492.25 298.75 546.25 298.75 546.25V564.25C298.75 564.25 332.75 564.25 336.75 560.25C336.75 560.25 333.75 544.25 336.75 531.25C339.75 518.25 331.75 477.25 331.75 477.25L330.96 452.57C330.901 449.521 330.031 446.542 328.439 443.94C326.846 441.339 324.589 439.209 321.9 437.77C320.007 436.767 317.902 436.232 315.76 436.21C315.76 436.21 247.76 425.21 223.76 427.21C199.76 429.21 158.75 432.25 158.75 432.25Z" fill="black"/>
          <Path id="Vector_59" d="M158.75 431.25C158.75 431.25 146.75 472.25 182.75 479.25L221.75 477.25C221.75 477.25 276.75 466.25 291.75 474.25C291.75 474.25 297.75 475.25 295.75 483.25C293.75 491.25 298.75 545.25 298.75 545.25V563.25C298.75 563.25 332.75 563.25 336.75 559.25C336.75 559.25 333.75 543.25 336.75 530.25C339.75 517.25 331.75 476.25 331.75 476.25L330.96 451.57C330.901 448.521 330.031 445.542 328.439 442.94C326.846 440.339 324.589 438.209 321.9 436.77C320.007 435.767 317.902 435.232 315.76 435.21C315.76 435.21 247.76 424.21 223.76 426.21C199.76 428.21 158.75 431.25 158.75 431.25Z" fill="#8B9CD1"/>
          <Path id="Vector_60" d="M225.75 300.25C225.75 300.25 243.75 321.25 245.75 328.25C247.75 335.25 269.75 353.25 269.75 353.25C269.75 353.25 253.75 365.25 256.75 371.25C259.75 377.25 235.75 351.25 235.75 351.25L207.75 310.25L225.75 300.25Z" fill="#EB6475"/>
          <Path id="Vector_61" opacity="0.1" d="M225.75 300.25C225.75 300.25 243.75 321.25 245.75 328.25C247.75 335.25 269.75 353.25 269.75 353.25C269.75 353.25 253.75 365.25 256.75 371.25C259.75 377.25 235.75 351.25 235.75 351.25L207.75 310.25L225.75 300.25Z" fill="black"/>
          <Path id="Vector_62" d="M237.75 276.25C237.75 276.25 228.75 305.25 228.75 316.25C228.75 327.25 190.75 313.25 191.75 307.25C192.75 301.25 213.75 279.25 214.75 270.25C215.75 261.25 237.75 276.25 237.75 276.25Z" fill="#F8BDC5"/>
          <Path id="Vector_63" opacity="0.1" d="M207.75 296.25C207.75 296.25 172.75 287.25 167.75 338.25C162.75 389.25 171.75 395.25 156.75 426.25C141.75 457.25 258.75 430.25 258.75 430.25C258.75 430.25 252.75 423.25 233.75 426.25L224.75 399.25C224.75 399.25 221.75 387.25 238.75 387.25C255.75 387.25 247.75 352.25 247.75 352.25C247.75 352.25 238.75 322.25 233.75 319.25C228.75 316.25 219.75 298.25 207.75 296.25Z" fill="black"/>
          <Path id="Vector_64" d="M207.75 294.25C207.75 294.25 172.75 285.25 167.75 336.25C162.75 387.25 171.75 393.25 156.75 424.25C141.75 455.25 258.75 428.25 258.75 428.25C258.75 428.25 252.75 421.25 233.75 424.25L224.75 397.25C224.75 397.25 221.75 385.25 238.75 385.25C255.75 385.25 247.75 350.25 247.75 350.25C247.75 350.25 238.75 320.25 233.75 317.25C228.75 314.25 219.75 296.25 207.75 294.25Z" fill="#EB6475"/>
          <Path id="Vector_65" d="M242.75 366.25C242.75 366.25 315.75 374.25 327.75 372.25C327.75 372.25 381.35 365.65 367.75 379.25C366.75 380.25 331.75 388.25 327.75 387.25C323.75 386.25 238.75 387.25 238.75 387.25L237.75 377.25L242.75 366.25Z" fill="#F8BDC5"/>
          <Path id="Vector_66" opacity="0.1" d="M186.75 341.25L239.75 389.25C239.75 389.25 249.75 369.25 252.75 369.25C255.75 369.25 216.75 310.25 216.75 310.25C216.75 310.25 206.75 298.25 200.75 304.25C194.75 310.25 176.75 306.25 186.75 341.25Z" fill="black"/>
          <Path id="Vector_67" d="M185.75 339.25L238.75 387.25C238.75 387.25 248.75 367.25 251.75 367.25C254.75 367.25 215.75 308.25 215.75 308.25C215.75 308.25 205.75 296.25 199.75 302.25C193.75 308.25 175.75 304.25 185.75 339.25Z" fill="#EB6475"/>
        </G>
        <G id="womans-head">
          <Path id="Vector_68" opacity="0.1" d="M257.65 252.96C263.25 255.17 270.11 252.52 273.41 247.49C276.71 242.46 276.61 235.61 273.83 230.27C271.05 224.93 265.91 221.05 260.24 219.03C256.8 217.81 252.97 217.11 250.33 214.59C248.66 213 247.67 210.85 246.42 208.91C241.75 201.63 233.42 197.33 224.95 195.64C216.48 193.95 207.72 194.55 199.1 195.15C195.88 195.38 192.1 195.96 190.64 198.84C189.55 201 190.26 203.59 190.12 206C189.67 213.67 181.12 217.92 173.65 219.76C166.18 221.6 157.52 223.33 153.88 230.09C150.62 236.16 152.95 243.52 153.96 250.34C155.687 262.253 153.106 274.391 146.68 284.57C143.41 289.7 139.2 294.26 136.61 299.77C133.745 305.927 133.081 312.882 134.73 319.47C135.22 321.4 135.91 323.36 135.57 325.32C135.178 326.931 134.403 328.423 133.31 329.67C128.927 335.278 123.417 339.904 117.135 343.249C110.853 346.594 103.939 348.584 96.84 349.09C97.98 353.38 102.13 356.09 106.08 358.09C112.82 361.557 119.923 364.267 127.26 366.17C132.19 367.45 137.35 368.36 142.37 367.49C147.39 366.62 152.28 363.67 154.37 359.01C155.57 356.31 155.75 353.26 156.81 350.5C159.2 344.31 165.57 340.57 168.99 334.88C172.26 329.44 173.53 328.8 174.36 322.52C175.19 316.24 177.02 309.46 182.18 305.77C187.58 301.9 195.18 302.64 201.18 305.61C207.18 308.58 210.89 307.42 215.9 311.78C224.689 319.415 234.525 325.753 245.11 330.6C244.11 321.88 242.5 312.15 235.42 306.96C233.42 305.47 230.89 304.33 229.83 302.05C228.14 298.42 231.03 293.99 229.72 290.2C228.41 286.41 223.43 285.01 221.22 281.57C219.34 278.65 219.85 274.68 221.61 271.68C223.37 268.68 226.15 266.46 228.92 264.36C231.38 262.5 233.873 260.683 236.4 258.91C238.683 257.461 240.733 255.674 242.48 253.61C243.48 252.24 244.14 249.24 245.53 248.27C249.03 245.85 254.41 251.69 257.65 252.96Z" fill="black"/>
          <Path id="Vector_69" d="M228.75 294.25C246.975 294.25 261.75 279.475 261.75 261.25C261.75 243.025 246.975 228.25 228.75 228.25C210.525 228.25 195.75 243.025 195.75 261.25C195.75 279.475 210.525 294.25 228.75 294.25Z" fill="#F8BDC5"/>
          <Path id="Vector_70" d="M256.65 251.96C262.25 254.17 269.11 251.52 272.41 246.49C275.71 241.46 275.61 234.61 272.83 229.27C270.05 223.93 264.91 220.05 259.24 218.03C255.8 216.81 251.97 216.11 249.33 213.59C247.66 212 246.67 209.85 245.42 207.91C240.75 200.63 232.42 196.33 223.95 194.64C215.48 192.95 206.72 193.55 198.1 194.15C194.88 194.38 191.1 194.96 189.64 197.84C188.55 200 189.26 202.59 189.12 205C188.67 212.67 180.12 216.92 172.65 218.76C165.18 220.6 156.52 222.33 152.88 229.09C149.62 235.16 151.95 242.52 152.96 249.34C154.687 261.253 152.106 273.391 145.68 283.57C142.41 288.7 138.2 293.26 135.61 298.77C132.745 304.927 132.081 311.882 133.73 318.47C134.22 320.4 134.91 322.36 134.57 324.32C134.178 325.931 133.403 327.423 132.31 328.67C127.927 334.278 122.417 338.904 116.135 342.249C109.853 345.594 102.939 347.584 95.84 348.09C96.98 352.38 101.13 355.09 105.08 357.09C111.82 360.557 118.923 363.267 126.26 365.17C131.19 366.45 136.35 367.36 141.37 366.49C146.39 365.62 151.28 362.67 153.37 358.01C154.57 355.31 154.75 352.26 155.81 349.5C158.2 343.31 164.57 339.57 167.99 333.88C171.26 328.44 172.53 327.8 173.36 321.52C174.19 315.24 176.02 308.46 181.18 304.77C186.58 300.9 194.18 301.64 200.18 304.61C206.18 307.58 209.89 306.42 214.9 310.78C223.689 318.415 233.525 324.753 244.11 329.6C243.11 320.88 241.5 311.15 234.42 305.96C232.42 304.47 229.89 303.33 228.83 301.05C227.14 297.42 230.03 292.99 228.72 289.2C227.41 285.41 222.43 284.01 220.22 280.57C218.34 277.65 218.85 273.68 220.61 270.68C222.37 267.68 225.15 265.46 227.92 263.36C230.38 261.5 232.873 259.683 235.4 257.91C237.683 256.461 239.733 254.674 241.48 252.61C242.48 251.24 243.14 248.24 244.53 247.27C248.03 244.85 253.41 250.69 256.65 251.96Z" fill="#916168"/>
        </G>
        <G id="raised-noodle">
          <Path id="Vector_71" d="M373.25 295.75H372.25V336.75H373.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_72" d="M374.25 295.75H373.25V336.75H374.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_73" d="M375.25 295.75H374.25V336.75H375.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_74" d="M376.25 295.75H375.25V336.75H376.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_75" d="M377.25 295.75H376.25V336.75H377.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_76" d="M378.25 295.75H377.25V336.75H378.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
          <Path id="Vector_77" d="M379.25 295.75H378.25V336.75H379.25V295.75Z" fill="#FFD77C" stroke="#FFAB50" stroke-width="0.25" stroke-miterlimit="10"/>
        </G>
        </G>
        <Defs>
          <LinearGradient id="paint0_linear" x1="841.5" y1="73.5" x2="86" y2="560" gradientUnits="userSpaceOnUse">
            <Stop stop-color="#E3E9DB"/>
            <Stop offset="1" stop-opacity="0"/>
          </LinearGradient>
          <ClipPath id="clip0">
            <Rect width="903.77" height="657.14" fill="white"/>
          </ClipPath>
        </Defs>
    </Svg>
  )
}

export default EatingImage