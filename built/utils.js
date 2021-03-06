export const getDateFromNonStandardString = (text)=>{
    const year = text.slice(0, 4);
    const month = text.slice(4, 6);
    const date = text.slice(6, 8);
    const hour = text.slice(8, 10);
    const minute = text.slice(10, 12);
    const second = text.slice(12, 14);
    return {
        year,
        month,
        date,
        hour,
        minute,
        second
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0RGF0ZUZyb21Ob25TdGFuZGFyZFN0cmluZyA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeWVhciA9IHRleHQuc2xpY2UoMCwgNClcbiAgY29uc3QgbW9udGggPSB0ZXh0LnNsaWNlKDQsIDYpXG4gIGNvbnN0IGRhdGUgPSB0ZXh0LnNsaWNlKDYsIDgpXG4gIGNvbnN0IGhvdXIgPSB0ZXh0LnNsaWNlKDgsIDEwKVxuICBjb25zdCBtaW51dGUgPSB0ZXh0LnNsaWNlKDEwLCAxMilcbiAgY29uc3Qgc2Vjb25kID0gdGV4dC5zbGljZSgxMiwgMTQpXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyLFxuICAgIG1vbnRoLFxuICAgIGRhdGUsXG4gICAgaG91cixcbiAgICBtaW51dGUsXG4gICAgc2Vjb25kXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXREYXRlRnJvbU5vblN0YW5kYXJkU3RyaW5nIiwidGV4dCIsInllYXIiLCJzbGljZSIsIm1vbnRoIiwiZGF0ZSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTUEsNEJBQTRCLEdBQUcsQ0FBQ0MsSUFBWSxHQUFLO0lBQzVELE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixNQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsTUFBTUUsSUFBSSxHQUFHSixJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLE1BQU1HLElBQUksR0FBR0wsSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM5QixNQUFNSSxNQUFNLEdBQUdOLElBQUksQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakMsTUFBTUssTUFBTSxHQUFHUCxJQUFJLENBQUNFLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBRWpDLE9BQU87UUFDTEQsSUFBSTtRQUNKRSxLQUFLO1FBQ0xDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07S0FDUCxDQUFBO0NBQ0YsQ0FBQSJ9